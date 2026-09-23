const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const zoomTrigger = document.querySelector('.image-zoom');

zoomTrigger.addEventListener('click', () => {
    const img = zoomTrigger.querySelector('img');
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt;
    lightbox.showModal();
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) lightbox.close();
});