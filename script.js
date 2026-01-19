// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SMOOTH SCROLL & ACTIVE NAVBAR
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// CAROUSEL
let track = document.querySelector(".carousel-track");
let prevBtn = document.querySelector(".carousel-btn.prev");
let nextBtn = document.querySelector(".carousel-btn.next");
let index = 0;

nextBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".carousel-item");
  index = (index + 1) % items.length;
  track.style.transform = `translateX(-${index * (items[0].offsetWidth + 16)}px)`;
});

prevBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".carousel-item");
  index = (index - 1 + items.length) % items.length;
  track.style.transform = `translateX(-${index * (items[0].offsetWidth + 16)}px)`;
});

// TESTIMONIAL SLIDER
let testimonials = document.querySelectorAll(".testimonial");
let tIndex = 0;

function showTestimonial(i) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

setInterval(() => {
  tIndex = (tIndex + 1) % testimonials.length;
  showTestimonial(tIndex);
}, 5000);

// FAQ COLLAPSE
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
