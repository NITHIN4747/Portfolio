// Header Toggle
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});

// Close nav bar on option selection or screen click
document.addEventListener('click', function (e) {
    // Check if the click is outside the header or not on the MenuBtn
    if (!document.querySelector('header').contains(e.target) && !e.target.closest('#MenuBtn')) {
        document.querySelector('body').classList.remove('mobile-nav-active');
        MenuBtn.classList.remove('fa-xmark');
    }
});

// Close nav bar when a nav option is clicked
document.querySelectorAll('header nav ul li a').forEach(function (navOption) {
    navOption.addEventListener('click', function () {
        document.querySelector('body').classList.remove('mobile-nav-active');
        MenuBtn.classList.remove('fa-xmark');
    });
});

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: ['Software Engineer!', 'Web Developer!', 'AI Researcher!','Student!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
}) 