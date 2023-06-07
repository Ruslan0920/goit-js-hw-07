import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');
console.log(fullGallery);
// 
const createFullGallery = galleryItems.map(({preview, original,description}) =>
    `<li class = "gallery__item">
    <img class = "gallery__image" src="${preview}" alt="${description}"  width = 300>
    </li>`
)
fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));
fullGallery.addEventListener('click', onClick);

function onClick(event) {
    // console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
        console.log(event.target);
}

// import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()