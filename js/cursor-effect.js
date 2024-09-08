document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', (e) => {
      // Gebruik clientX en clientY voor correcte positie, ongeacht scrollen
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });
  