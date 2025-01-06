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
});

// Get all elements with class "counter"
const counters = document.querySelectorAll('.counter');

// Function to animate the counter
function animateCounter(counter) {
    const target = counter.getAttribute('data-target');
    let current = 0;
    const interval = setInterval(() => {
        current++;
        counter.textContent = current;
        if (current >= target) {
            clearInterval(interval);
        }
    }, 147); // adjust the speed of the animation
}

// Animate the counters when the fact section is in view
const factSection = document.getElementById('fact');
const factObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach((counter) => {
            animateCounter(counter);
        });
    }
}, {
    threshold: 1.0,
});

factObserver.observe(factSection);

// Get all elements with class "skill-box"
const skillBoxes = document.querySelectorAll('.skill-box');

// Function to animate the skill bars
function animateSkillBars() {
    skillBoxes.forEach((skillBox) => {
        const skillInfo = skillBox.querySelector('.skill-info');
        const skillInnerLine = skillBox.querySelector('.skill-inner-line');
        const skillPercentage = skillInfo.querySelector('h2:last-child').textContent.replace('%', ''); // Remove the % sign
        skillInnerLine.style.width = '0%'; // Reset the width to 0%
        setTimeout(() => {
            skillInnerLine.style.width = `${skillPercentage}%`; // Set the width to the percentage
        }, 100); // Add a delay to start the animation
    });
}

// Animate the skill bars when the skill section is in view
const skillSection = document.getElementById('skill');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkillBars();
    }
}, {
    threshold: 1.0,
});

observer.observe(skillSection);