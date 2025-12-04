// Підключення SimpleLightbox (npm)
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Імпорт масиву зображень (використай свій файл з images)
import { images } from "./images.js";

// ==========================
// 1. Створення галереї
// ==========================

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `
    )
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(images));

// ==========================
// 2. Ініціалізація SimpleLightbox
// ==========================

new SimpleLightbox(".gallery a", {
  captionsData: "alt",       // підпис з alt
  captionPosition: "bottom", // знизу
  captionDelay: 250,         // затримка 250мс
});
