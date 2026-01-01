document.addEventListener("DOMContentLoaded", () => {
  // Hero animations
  document.querySelectorAll(".animate").forEach(el => {
    setTimeout(() => el.classList.add("show"), 100);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
