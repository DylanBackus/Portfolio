document.addEventListener("DOMContentLoaded", function () {
    // Selecteer de twee afbeeldingen
    var pic1 = document.querySelector(".about-me-pic-1");
    var pic2 = document.querySelector(".about-me-pic-2");
  
    // Instellen van de IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Als het element in beeld is, voeg de fade-in klasse toe
          if (entry.target === pic1) {
            entry.target.classList.add('fade-in');
          } else if (entry.target === pic2) {
            entry.target.classList.add('fade-in');
          }
        }
      });
    }, {
      threshold: 0.5 // Zorgt ervoor dat de fade-in gebeurt wanneer 50% van het element zichtbaar is
    });
  
    // Observeer de twee afbeeldingen
    observer.observe(pic1);
    observer.observe(pic2);
  });
  