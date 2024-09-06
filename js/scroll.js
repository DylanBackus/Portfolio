window.addEventListener("scroll", function () {
  var title = document.querySelector(".main-title");
  var scrollPosition = window.scrollY;

  if (scrollPosition <= 200) {
    var opacity = 1 - scrollPosition / 200;
    title.style.transition = "opacity 0.5s ease-out";
    title.style.opacity = opacity;
  } else {
    title.style.transition = "opacity 0.5s ease-out";
    title.style.opacity = 0;
  }
});
