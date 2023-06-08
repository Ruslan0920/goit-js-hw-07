import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');
console.log(fullGallery);
// 
const createFullGallery = galleryItems.map(({preview, original,description}) =>
    `<li class = "gallery__item">
    <img class = "gallery__image gallery__link" src="${preview}" alt="${description}">
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

const instance = basicLightbox.create(
    `<div class="modal">
       
    <img  class = "gallery__image gallery__link" src="${createFullGallery.original}" alt="${createFullGallery.description}">
  
    </div>`
)

instance.show();
console.log(instance);



// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

