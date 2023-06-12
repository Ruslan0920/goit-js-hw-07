import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');
console.log(fullGallery);
// 
const createFullGallery = galleryItems.map(({preview, original, description}) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </li>`

)
fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));
fullGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    // console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    // console.log(event.target.currentSrc);
    
    const instance = basicLightbox.create(
    `<img  class = "gallery__link" src="${event.target.currentSrc}" alt="${createFullGallery.description}">`
)

    instance.show();
    // event. preventDefault()
}

// console.log(createFullGallery);

// import * as basicLightbox from 'basiclightbox'






// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

