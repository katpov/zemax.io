document.addEventListener('DOMContentLoaded', function () {
    var serviceBlocks = document.querySelectorAll('.service');
    var currentIndex = 0;

    function animateBlocks() {
        serviceBlocks.forEach(function (block) {
            block.classList.remove('animate-block');
        });

        serviceBlocks[currentIndex].style.transitionDelay = '0s';

        setTimeout(function () {
            serviceBlocks[currentIndex].classList.add('animate-block');
        }, 100);
        currentIndex = (currentIndex + 1) % serviceBlocks.length;
    }

    animateBlocks();

    setInterval(animateBlocks, 1000);
});
function showPopup() {
    var popup = document.getElementById('popup-bg');
    var contactForm = document.getElementById('contactForm');

    popup.classList.add('active');
    contactForm.classList.add('active');
}

document.getElementById('close-popup').addEventListener('click', function(){ 
    document.getElementById('contactForm').classList.remove('active');
    document.getElementById('popup-bg').classList.remove('active');
});

var inputsAndTextarea = document.querySelectorAll('.form-group input, .form-group textarea');

function handleFocus() {
    var parentDiv = this.closest('div');
    var placeholder = parentDiv.querySelector('.placeholder');
    placeholder.classList.add('active');
}

inputsAndTextarea.forEach(function (element) {
    element.addEventListener('focus', handleFocus);
});
function handleBlur() {
    var parentDiv = this.closest('div');
    var placeholder = parentDiv.querySelector('.placeholder');
    var inputValue = this.value;

    if (inputValue.length === 0) {
        placeholder.classList.remove('active');
    }
}

inputsAndTextarea.forEach(function (element) {
    element.addEventListener('blur', handleBlur);
});

