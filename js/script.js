const main = document.querySelector('main');

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('bg-black/60', 'backdrop-blur-xl', 'shadow-2xl');
        nav.classList.remove('bg-black/20', 'backdrop-blur-md');
    } else {
        nav.classList.add('bg-black/20', 'backdrop-blur-md');
        nav.classList.remove('bg-black/60', 'backdrop-blur-xl', 'shadow-2xl');
    }
});


const btnOpen = document.getElementById('nav-open');
const btnClose = document.getElementById('nav-close');
const mobileMenu = document.getElementById('nav-mobile');
const overlay = document.getElementById('nav-overlay');

function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');

    if (isClosed) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        overlay.classList.remove('hidden', 'opacity-0');

        document.body.classList.add('overflow-hidden');
    } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        overlay.classList.add('hidden', 'opacity-0');

        document.body.classList.remove('overflow-hidden');
    }
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    const isOpen = !answer.classList.contains('hidden');

    if (isOpen) {
        // Close it
        answer.classList.add('hidden');
        icon.classList.remove('rotate-180');
        button.classList.remove('bg-white/10');
    } else {
        // Open it
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
        button.classList.add('bg-white/10');
    }
}

const typed = new Typed('#typed-text', {
    strings: ['save our planet', 'make a difference', 'create a greener future'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

const typedDesc = new Typed('#about-hero-desc', {
    strings: [
        'We are a.'
    ],
    typeSpeed: 30,
    showCursor: true, 

});