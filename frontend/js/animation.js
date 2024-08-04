document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.cards-container');
      const cards = Array.from(document.querySelectorAll('.card'));
      
      let currentIndex = 0;
      let direction = 1; // 1 for left-to-right, -1 for right-to-left
      const interval = 2000; // Interval time in milliseconds
      const animationDuration = 6000; // Duration of the slide effect in milliseconds
  
      function showNextCard() {
          // Hide all cards except the current one
          cards.forEach((card, index) => {
              card.style.transition = `transform ${animationDuration}ms ease, opacity ${animationDuration}ms ease`;
              if (index === currentIndex) {
                  card.style.opacity = 1;
                  card.style.transform = `translateX(0%)`;
              } else {
                  card.style.opacity = 0;
                  card.style.transform = `translateX(${direction * 1}%)`;
              }
          });
  
          // Update current index based on direction
          if (direction === 1) {
              currentIndex += 1;
              if (currentIndex >= cards.length) {
                  direction = -1;
                  currentIndex = cards.length - 1;
              }
          } else {
              currentIndex -= 1;
              if (currentIndex < 0) {
                  direction = 1;
                  currentIndex = 0;
              }
          }
      }
  
      // Start the animation loop
      setInterval(showNextCard, interval);
  });
  