document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // --- NAV SCROLL LOGIC ---
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.remove('bg-transparent');
                nav.classList.add('bg-black/60', 'backdrop-blur-md');
            } else {
                nav.classList.remove('bg-black/60', 'backdrop-blur-md');
                nav.classList.add('bg-transparent');
            }
        });
    }

    // --- MOBILE MENU LOGIC ---
    const btnOpen = document.getElementById("nav-open");
    const btnClose = document.getElementById("nav-close");
    const mobileMenu = document.getElementById("nav-mobile");
    const overlay = document.getElementById("nav-overlay");

    function toggleMenu() {
        if (!mobileMenu || !overlay) return;

        const isClosed = mobileMenu.classList.contains("translate-x-full");
        if (isClosed) {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");
            overlay.classList.remove("hidden", "opacity-0");
            body.classList.add("overflow-hidden");
        } else {
            mobileMenu.classList.add("translate-x-full");
            mobileMenu.classList.remove("translate-x-0");
            overlay.classList.add("hidden", "opacity-0");
            body.classList.remove("overflow-hidden");
        }
    }

    if (btnOpen) btnOpen.addEventListener("click", toggleMenu);
    if (btnClose) btnClose.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", toggleMenu);

    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (contactForm && successModal && closeModalBtn) {
        const modalContent = successModal.querySelector('.modal-content');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            successModal.classList.remove('hidden');

            setTimeout(() => {
                successModal.classList.remove('opacity-0');
                if(modalContent) {
                    modalContent.classList.remove('scale-95');
                    modalContent.classList.add('scale-100');
                }
            }, 10);

            contactForm.reset();
        });


        function closeSuccessModal() {
            successModal.classList.add('opacity-0');
            if(modalContent) {
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-95');
            }
            
            setTimeout(() => {
                successModal.classList.add('hidden');
            }, 300); 
        }

        closeModalBtn.addEventListener('click', closeSuccessModal);

        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeSuccessModal();
            }
        });
    }
});