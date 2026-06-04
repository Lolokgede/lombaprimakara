const body = document.body;

// Scroll nav
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-black/60', 'backdrop-blur-md');
    } 
    else {
        nav.classList.remove('bg-black/60', 'backdrop-blur-md');
        nav.classList.add('bg-transparent'); 
    }
});

// nav mobile toggle
const btnOpen = document.getElementById("nav-open");
const btnClose = document.getElementById("nav-close");
const mobileMenu = document.getElementById("nav-mobile");
const overlay = document.getElementById("nav-overlay");

function toggleMenu() {
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

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// FAQ Toggle 
function toggleSmoothFaq(button) {
  const faqItem = button.closest('.faq-item');
  const contentWrapper = button.nextElementSibling;
  const chevronIcon = button.querySelector('.chevron-icon');
  
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('button');
    const wrapper = btn.nextElementSibling;
    const icon = btn.querySelector('.chevron-icon');
    
    btn.setAttribute('aria-expanded', 'false');
    wrapper.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
    icon.classList.remove('rotate-180', 'text-primary');
    item.classList.remove('border-primary', 'bg-white/10');
    item.classList.add('border-transparent');
  });

  if (!isExpanded) {
    button.setAttribute('aria-expanded', 'true');
    contentWrapper.classList.replace('grid-rows-[0fr]', 'grid-rows-[1fr]');
    chevronIcon.classList.add('rotate-180', 'text-primary');
    faqItem.classList.remove('border-transparent');
    faqItem.classList.add('border-primary', 'bg-white/10');
  }
}

// type js
const typed = new Typed('#typed-text', {
    strings: ['Save Our Planet', 'Make A Difference', 'Create A Greener Future'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});