import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');
console.log(fullGallery);
// fullGallery.addEventListener
const createFullGallery = galleryItems.map(({preview, original,description}) =>
    `<li>
    <img src="${preview}" alt="${description}" class = "gallery__item gallery__image" width = 300>
    </li>`
)
fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()