var images = document.querySelectorAll('.imagem input[type="radio"]');
var bars = document.querySelectorAll('.navigation .bar');
var currentIndex = 0;
var interval = setInterval(changeImage, 4000);

function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    images[currentIndex].checked = true;
    updateBars();
}
function updateBars() {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.remove('active');
    }
    bars[currentIndex].classList.add('active');
}
for (var i = 0; i < bars.length; i++) {
    bars[i].addEventListener('click', function() {
        clearInterval(interval);
        currentIndex = Array.from(bars).indexOf(this);
        images[currentIndex].checked = true;
        updateBars();
        interval = setInterval(changeImage, 3000);
    });

}