
        let isDarkMode = false;

        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            const body = document.body;
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');
            
            if (isDarkMode) {
                body.className = 'dark-mode';
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                body.className = 'light-mode';
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }

        function showSection(sectionName) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
        });
        bsCollapse.hide();
    }
}

function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !skills || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Simulate form submission (In real-world, send to backend)
    alert("Thank you, " + name + "! Your application has been received.");

    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('message').value = '';
}
