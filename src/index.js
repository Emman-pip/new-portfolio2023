function blurBackground(target) {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      document.body.querySelector(target).style.backdropFilter = "blur(0.2rem)";
    } else {
      document.body.querySelector(target).style.backdropFilter = "none";
    }
  });
}

(() => {
  blurBackground(".heroPage");
  blurBackground(".bottomNavBar");
})();

// document.querySelector()
