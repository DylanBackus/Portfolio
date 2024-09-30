document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector(".about-me-second-text-container");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = 1;
      } else {
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = 0;
      }
    });
  }, {
    threshold: 0.6 
  });

  observer.observe(aboutSection);
});
