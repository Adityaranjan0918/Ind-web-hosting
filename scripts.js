// script.js for IND WEB Hoster website

// Navigation functionality
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modalOpenBtns = document.querySelectorAll('[data-modal]');
const modalCloseBtns = document.querySelectorAll('.modal-close');

modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.querySelector(modalId).classList.add('is-active');
    });
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('is-active');
    });
});

// Dynamic feature example
const dynamicContent = document.querySelector('#dynamic-content');

setInterval(() => {
    const newContent = `Current UTC Time: ${new Date().toISOString().substring(0, 19).replace('T', ' ')}`;
    dynamicContent.innerHTML = newContent;
}, 1000);
