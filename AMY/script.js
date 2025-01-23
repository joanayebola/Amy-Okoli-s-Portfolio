// script.js
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  nav.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("active");
});

// script.js
const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

const updateCarousel = () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const slideWidth = slides[0].getBoundingClientRect().width;
  const offset = currentIndex * slideWidth;
  carouselTrack.style.transform = `translateX(-${offset}px)`;
};

prevBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
