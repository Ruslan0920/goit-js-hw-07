import { galleryItems } from './gallery-items.js';
// Change code below this line

const fullGallery = document.querySelector('.gallery');

const createFullGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
    </a>
    </li>`
);

fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));
fullGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const newTarget = event.target;

    if (!newTarget.classList.contains('gallery__image')) {
        return;
    }
    
    const instance = basicLightbox.create(
    `<img src="${newTarget.dataset.source}" alt="${newTarget.alt}">`
    )
    // console.log(instance);

    const openModalWindow = instance.show({ onShow: (instance) => { instance.addEventListener('keydown', pressEsc) } })
    
        console.log(instance);
    console.log(openModalWindow);
    
        // const closeModalWindow = instance.close({onClose: (instance) => {window.removeEventListener('keydown', pressEsc)}})

    // instance.show(window.addEventListener('keydown', pressEsc));

    function pressEsc(event) {
        console.log(event);
        if (event.keyCode === 27)
            // instance.close(window.removeEventListener('keydown', pressEsc))
            return
    }
}