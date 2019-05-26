let mainNav = document.getElementById('js-nav-menu');
let navBarToggle = document.getElementById('js-toggle-icon');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});