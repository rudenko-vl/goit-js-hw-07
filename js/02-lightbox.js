import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector("ul.gallery");

listGallery.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

