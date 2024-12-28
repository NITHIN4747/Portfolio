// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: ['Software Engineer!', 'Web Developer!', 'AI Researcher!','Student!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})