document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);

    const surpriseButton = document.getElementById('surpriseButton');
    const surprise = document.getElementById('surprise');
    const nextSurpriseButton = document.getElementById('nextSurpriseButton');

    surpriseButton.addEventListener('click', () => {
        surprise.classList.toggle('hidden');
        surpriseButton.textContent = surprise.classList.contains('hidden')
            ? 'Click for a Surprise!'
            : 'Close Surprise';
    });

    nextSurpriseButton.addEventListener('click', () => {
        window.location.href = 'surprise.html';
    });
});
