import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector("div.gallery");

galleryDiv.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galleryDiv.addEventListener('click', modalOpen)

function modalOpen(event) {
  event.preventDefault();
  const bigImage = event.target;
  if (bigImage.nodeName !== 'IMG') {
    return;
  }
  const urlImage = getImageUrl(bigImage)
  
  function getImageUrl() {
  return bigImage.dataset.source;
  };
  const instance = basicLightbox.create(`
    <img
      src="${urlImage}"
      width='800' height='600'
    />
`, {
    onShow: (instance) => {
    instance.element().querySelector('img').onclick = instance.close;
    }
  })

  instance.show();
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  } );
};


