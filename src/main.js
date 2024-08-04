import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import * as render from './js/render-functions.js';
import * as apiCalls from './js/pixabay-api.js';
import iziToast from 'izitoast';

const searchForm = document.querySelector('.search__form');
const loaderPlaceholder = document.querySelector('.js__loader');
const galleryEL = document.querySelector('.gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchValue = event.target.elements.user_query.value.trim();
  if (searchValue === '') {
    iziToast.error({
      message: 'Input something to search!',
      position: 'topRight',
    });

    searchForm.reset();

    return;
  }

  searchForm.reset();

  loaderPlaceholder.classList.remove('is-hidden');
  apiCalls
    .apiCall(searchValue)
    .finally(() => {
      loaderPlaceholder.classList.add('is-hidden');
    })
    .then(({ hits }) => {
      if (!hits || hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        searchForm.reset();

        return;
      }
      const galleryHTML = render.renderGallery(hits);
      galleryEL.innerHTML = galleryHTML;
      gallery.refresh();
    });
};

searchForm.addEventListener('submit', onSearchFormSubmit);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'tags',
  captionDelay: 250,
});
