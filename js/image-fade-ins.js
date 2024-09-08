document.addEventListener("DOMContentLoaded", function () {
    // Selecteer de afbeeldingen die ingefade moet worden
    var images = document.querySelectorAll(".about-me-pic-1, .about-me-pic-2");
  
    // maken van IntersectionObserver
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // add de fade-in class toe wanneer de afbeelding in beeld komt
          entry.target.classList.add('fade-in');
        } else {
          // Verwijder fade-in class als de afbeelding uit beeld is
          entry.target.classList.remove('fade-in');
        }
      });
    }, {
      threshold: 0.5 // animatie begint wanneer 50% van de afbeelding zichtbaar is
    });
  
    // start observer voor elke afbeelding
    images.forEach(function (image) {
      observer.observe(image);
    });
  });
  