const images = [
    'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
    'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    'https://images.unsplash.com/photo-1524429656589-6633a470097c',
    'https://images.unsplash.com/photo-1530224264768-7ff8c1789d79',
    'https://images.unsplash.com/photo-1513938709626-033611b8cc03'
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('galleryImage').src = images[currentIndex];
    document.getElementById('prevButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === images.length - 1;
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

// Initialize the gallery with the first image
updateImage();