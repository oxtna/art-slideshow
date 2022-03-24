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
