document.addEventListener('DOMContentLoaded', function () {
      // Show home section by default
      showSection('home');

      // Get the menu icon and nav
      const menuIcon = document.getElementById('menu-icon');
      const nav = document.querySelector('header nav');

      // Toggle the navigation menu display when the menu icon is clicked
      menuIcon.addEventListener('click', function () {
          if (nav.style.display === 'flex') {
              nav.style.display = 'none';
          } else {
              nav.style.display = 'flex';
              nav.style.flexDirection = 'column'; // Ensure links are displayed in columns
              nav.style.position = 'absolute'; 
              nav.style.top = '50px'; // Adjust top position as needed
              nav.style.left = '0';
              nav.style.width = '100%';
              nav.style.backgroundColor = '#333';
              nav.style.padding = '10px 0';
              nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
          }
      });

      // Add event listeners to nav links
      document.querySelectorAll('header nav a').forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault();
              showSection(this.getAttribute('href').substring(1));
              // Hide nav on small screens after clicking a link
              if (window.innerWidth <= 600) {
                  nav.style.display = 'none';
              }
          });
      });
  });

  function showSection(sectionId) {
      document.querySelectorAll('section').forEach(section => {
          section.style.display = 'none';
      });
      document.getElementById(sectionId).style.display = 'block';
  }