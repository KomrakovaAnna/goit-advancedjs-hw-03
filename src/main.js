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
    return;
  }

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
        event.target.reset();
        return;
      }
      clearGallery();
      const galleryHTML = render.renderGallery(hits);
      galleryEL.innerHTML = galleryHTML;
      // const lightbox = new SimpleLightbox('.gallery a');
      gallery.refresh();
    });
};

function clearGallery() {
  galleryEL.innerHTML = '';
}

searchForm.addEventListener('submit', onSearchFormSubmit);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
