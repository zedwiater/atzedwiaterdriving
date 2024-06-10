let slideIndex = 1;
let autoPlayTimer;

showSlide(slideIndex);
autoPlaySlides();

function plusSlides(n) {
    clearInterval(autoPlayTimer);
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function autoPlaySlides() {
    autoPlayTimer = setInterval(function() {
        showSlide(slideIndex += 1);
    }, 6000); // Change 2000 to desired autoplay interval in milliseconds
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});
