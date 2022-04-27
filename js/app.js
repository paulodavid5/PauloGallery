const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndex = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;


imageIndex.forEach((i) => {
    const img = document.createElement('img');
    img.src = `/imgs/img${i}.jpg`;
    img.alt = `image ${i}`;
    img.classList.add('galleryImg');

    img.addEventListener('click', () => {

    })

    gallery.appendChild(img);
})
