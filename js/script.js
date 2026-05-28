tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                primary: '#10b981',
            }
        }
    }
}


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

// Mobile Menu Drawer Logic
const btnOpen = document.getElementById('nav-open');
const btnClose = document.getElementById('nav-close');
const mobileMenu = document.getElementById('nav-mobile');
const overlay = document.getElementById('nav-overlay');

function toggleMenu() {
    const isClosed = mobileMenu.classList.contains('translate-x-[100%]');

    if (isClosed) {
        // Open menu
        mobileMenu.classList.remove('translate-x-[100%]');
        mobileMenu.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        // slight delay for opacity transition
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        // Close menu
        mobileMenu.classList.add('translate-x-[100%]');
        mobileMenu.classList.remove('translate-x-0');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300); // wait for transition
        document.body.style.overflow = ''; // Restore scrolling
    }
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// FAQ Toggle Logic adapted for Minimal Brutalism / Glass theme
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    // Check if already open
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