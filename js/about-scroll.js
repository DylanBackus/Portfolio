document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector(".about-me-second-text-container");

  // maken van de IntersectionObserver
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element is zichtbaar. fade-in toepassen
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = 1;
      } else {
        // Element is niet zichtbaar, fade-out toepassen
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = 0;
      }
    });
  }, {
    threshold: 0.6 //fade-in gebeurt wanneer 60% van het element zichtbaar is
  });

  observer.observe(aboutSection);
});
