function blurBackground(target) {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      document.body.querySelector(target).style.backdropFilter = "blur(0.2rem)";
    } else {
      document.body.querySelector(target).style.backdropFilter = "none";
    }
  });
}

function slowScroll(element, target) {
  element.onscroll = () => {
    const scrolltoTop = document.scrollingElement.scrollTop;

    const xvalue = "center";
    const scrollFactor = 0.3;
    const yValue = scrolltoTop * scrollFactor;
    target.style.backgroundPosition = xvalue + " " + yValue + "px";
  };
}

(() => {
  slowScroll(document.querySelector("body"), document.querySelector("main"));
  blurBackground(".heroPage");
  blurBackground(".bottomNavBar");
})();

// document.querySelector()
