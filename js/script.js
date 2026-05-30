const main = document.querySelector("main");

// Scroll nav
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 20) {
    nav.classList.add("bg-black/60", "backdrop-blur-xl", "shadow-2xl");
    nav.classList.remove("bg-black/20", "backdrop-blur-md");
  } else {
    nav.classList.add("bg-black/20", "backdrop-blur-md");
    nav.classList.remove("bg-black/60", "backdrop-blur-xl", "shadow-2xl");
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

    document.body.classList.add("overflow-hidden");
  } else {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    overlay.classList.add("hidden", "opacity-0");

    document.body.classList.remove("overflow-hidden");
  }
}

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// FAQ Toggle Logic
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector("i");

  const isOpen = !answer.classList.contains("hidden");

  if (isOpen) {
    answer.classList.add("hidden");
    icon.classList.remove("rotate-180");
    button.classList.remove("bg-white/10");
  } else {
    answer.classList.remove("hidden");
    icon.classList.add("rotate-180");
    button.classList.add("bg-white/10");
  }
}

//  Calculator Logic
document.addEventListener("DOMContentLoaded", () => {
  const wasteTypeSelect = document.getElementById("waste-type");
  const wasteWeightInput = document.getElementById("waste-weight");
  const resultDisplay = document.getElementById("calc-result");

  function calculateEstimate() {
    const pricePerKg = parseFloat(wasteTypeSelect.value) || 0;
    const weight = parseFloat(wasteWeightInput.value) || 0;

    const total = pricePerKg * weight;

    resultDisplay.innerText = "Rp " + total.toLocaleString("id-ID");
  }

  wasteTypeSelect.addEventListener("change", calculateEstimate);
  wasteWeightInput.addEventListener("input", calculateEstimate);
});

// Typed JS
const typed = new Typed("#typed-text", {
  strings: ["save our planet", "make a difference", "create a greener future"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});
