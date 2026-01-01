// Simple animation on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 1;
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((card) => {
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
