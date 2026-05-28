// 1. Logika Scroll Navbar (Efek Blur Dinamis)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 20) {
            nav.classList.add('bg-black/60', 'backdrop-blur-xl', 'shadow-2xl');
            nav.classList.remove('bg-black/20', 'backdrop-blur-md');
        } else {
            nav.classList.add('bg-black/20', 'backdrop-blur-md');
            nav.classList.remove('bg-black/60', 'backdrop-blur-xl', 'shadow-2xl');
        }
    }
});

// 2. Logika Menu Drawer Mobile (Sudah Disesuaikan)
const btnOpen = document.getElementById('nav-open');
const btnClose = document.getElementById('nav-close');
const mobileMenu = document.getElementById('nav-mobile');
const overlay = document.getElementById('nav-overlay');

function toggleMenu() {
    if (!mobileMenu || !overlay) return; // Pengaman agar tidak error

    // Cek apakah menu sedang disembunyikan menggunakan translate-x-full
    const isClosed = mobileMenu.classList.contains('translate-x-full');

    if (isClosed) {
        // Buka menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden'; 
    } else {
        // Tutup menu
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300); 
        document.body.style.overflow = ''; 
    }
}

// Pasang event listener hanya jika elemennya ada di halaman tersebut
if (btnOpen && btnClose && overlay) {
    btnOpen.addEventListener('click', toggleMenu);
    btnClose.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// 3. Logika Buka/Tutup FAQ
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');

    const isOpen = !answer.classList.contains('hidden');

    if (isOpen) {
        answer.classList.add('hidden');
        icon.classList.remove('rotate-180');
        button.classList.remove('bg-white/10');
    } else {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
        button.classList.add('bg-white/10');
    }
}

// 4. Animasi Ketik (Typed.js) dengan Pengaman
const typedElement = document.getElementById('typed-text');
if (typedElement) {
    const typed = new Typed('#typed-text', {
        strings: ['save our planet', 'make a difference', 'create a greener future'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
}