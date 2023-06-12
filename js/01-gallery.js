import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');
// console.log(fullGallery);
// 
const createFullGallery = galleryItems.map(({preview, original, description}) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
    </a>
    </li>`
)
fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));
fullGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    // console.log(event.target.dataset.source);
    // console.log(event.target.alt);
    window.addEventListener('keydown', pressEsc)
    
    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
)
    instance.show();

    function pressEsc(event) {
        console.log(event);
        closeModal();
        function closeModal() {
        instance.remove('div.basicLightbox')
    }

    }

}