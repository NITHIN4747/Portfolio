// ==== TYPING EFFECT ====
const typed = new Typed('#auto-input', {
    strings: ['Software Engineer', 'Web Developer', 'AI Researchist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

// ==== MOBILE NAV TOGGLE ====
const mobileNav = document.getElementById('MenuBtn');
const header = document.querySelector('header');
const footer = document.querySelector('.footer');

mobileNav.addEventListener('click', () => {
    header.classList.toggle('mobile-nav-active');
    footer.classList.toggle('mobile-nav-active');
    mobileNav.classList.toggle('fa-xmark');
});

// ==== MODAL FUNCTIONALITY ====
const proItems = document.querySelectorAll('.pro-item');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <a id="modal-link" href="#" target="_blank">View Project</a>
    </div>
`;
document.body.appendChild(modal);

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

proItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.pro-info h4').textContent;
        const description = item.querySelector('.pro-info p').textContent;
        const link = item.querySelector('.pro-info a').getAttribute('href');

        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-link').setAttribute('href', link);
        
        modal.style.display = 'block';
    });
});

// ==== DARK/LIGHT MODE TOGGLE ====
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});
