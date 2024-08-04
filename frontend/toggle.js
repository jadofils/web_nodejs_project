document.addEventListener('DOMContentLoaded', function () {
    // Show home section by default
    showSection('home');

    // Get the menu icon and nav
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('header nav');

    // Toggle the navigation menu display when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

    // Add event listeners to nav links
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this.getAttribute('href').substring(1));
            // Hide nav on small screens after clicking a link
            if (window.innerWidth <= 600) {
                nav.classList.remove('nav-open');
            }
        });
    });

    // Handle window resizing
    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            nav.classList.remove('nav-open');
        }
    });
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    targetSection.classList.add('visible');
}
