const gallery = document.querySelector('.gallery');

export const renderGallery = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
  src="${webformatURL}"
  data-source="${largeImageURL}"
  tags="${tags}"
  data-likes="${likes}"
  data-views="${views}"
  data-comments="${comments}"
  data-downloads="${downloads}"
  alt="Image description"
    />
  </a>
  <div >
  <ul class="stats">
    <li class="stat-item">
    <div id="stat-header">Likes</div>
    <div class="stat-value">${likes}</div>
    </li>
    <li class="stat-item">
    <div id="stat-header">Views</div>
    <div class="stat-value">${views}</div>
    </li>
    <li class="stat-item">
    <div id="stat-header">Comments</div>
    <div class="stat-value">${comments}</div>
    </li>
    <li class="stat-item">
    <div id="stat-header">Downloads</div>
    <div class="stat-value">${downloads}</div>
    </li>
  </ul>
</div>
</li>`;
      }
    )
    .join('');
};
