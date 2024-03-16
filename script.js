document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(homeSection);
        hideSection(aboutSection);
        hideSection(contactSection);
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(aboutSection);
        hideSection(homeSection);
        hideSection(contactSection);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(contactSection);
        hideSection(homeSection);
        hideSection(aboutSection);
    });

    function showSection(section) {
        section.style.display = 'block';
    }

    function hideSection(section) {
        section.style.display = 'none';
    }
});
