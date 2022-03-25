// Reset timer animation when slides change
const slideshow = document.getElementById("slideshow");
const slideshowTimer = document.getElementById("timer");
let isCurrentSlideEven = false;
slideshow.addEventListener("slide.bs.carousel", () => {
  if (isCurrentSlideEven) {
    slideshowTimer.classList.remove("ticking2");
    void slideshowTimer.offsetWidth;
    slideshowTimer.classList.add("ticking1");
  }
  else {
    slideshowTimer.classList.remove("ticking1");
    void slideshowTimer.offsetWidth;
    slideshowTimer.classList.add("ticking2");
  }
  isCurrentSlideEven = !isCurrentSlideEven;
});

// Disable slideshow buttons tapping
const carouselIndicators = document.querySelector(".carousel-indicators");
const mql = window.matchMedia("(max-width: 991.98px)");
mql.addEventListener("change", (e) => {
  for (const child of carouselIndicators.children) {
    child.disabled = e.matches;
  }
});
