import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </li>`
  )
  .join("");
galleryContainer.insertAdjacentHTML("afterbegin", imgEl);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function blockStandartAction(event) {
  event.preventDefault();
}

function onGalleryContainerClick(event) {
  blockStandartAction(event);

  const isImgEl = event.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();


    const closeLightbox = () => {
      instance.close();
      window.removeEventListener("keydown", onKeyDown);
      console.log(event)
    };
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", onKeyDown);
  }
  