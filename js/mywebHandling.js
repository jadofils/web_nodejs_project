
        // Get references to the sections
        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const register = document.getElementById('register');
        const login = document.getElementById('login');
        const add_expense = document.getElementById('add_expense');
        const view_expense = document.getElementById('view_expense');

        // Function to hide all sections except the selected one
        function showSection(sectionToShow) {
            // Hide all sections
            home.style.display = 'none';
            about.style.display = 'none';
            register.style.display = 'none';
            login.style.display = 'none';
            add_expense.style.display = 'none';
            view_expense.style.display = 'none';

            // Display the selected section
            sectionToShow.style.display = 'block';
        }

        // Set home as default displayed on index.html
        home.style.display = 'block';
        about.style.display = 'none';
        register.style.display = 'none';
        login.style.display = 'none';
        add_expense.style.display = 'none';
        view_expense.style.display = 'none';

        // Event listeners for navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior (scrolling)

                // Get the target section ID from href attribute
                const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href

                // Show the corresponding section
                if (targetId === 'home') {
                    showSection(home);
                } else if (targetId === 'about') {
                    showSection(about);
                } else if (targetId === 'register') {
                    showSection(register);
                } else if (targetId === 'login') {
                    showSection(login);
                } else if (targetId === 'add_expense') {
                    showSection(add_expense);
                } else if (targetId === 'view_expense') {
                    showSection(view_expense);
                }
            });
        });

        // Get the current year
        const currentYear = new Date().getFullYear();
        // Set the year to the element with id "current-year"
        document.getElementById('current-year').textContent = currentYear;
 