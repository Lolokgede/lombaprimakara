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


// Calculator Logic
const wastePrices = {
      "3500": "Plastic (PET)",
      "2000": "Paper (Cardboard)",
      "8000": "Metal (Aluminum)",
      "4500": "Metal (Old Iron)",
      "1000": "Glass (Bottle)"
    };

    const container = document.getElementById('calc-items-container');
    const grandTotalEl = document.getElementById('grand-total');
    const totalWeightEl = document.getElementById('total-weight-display');

    function addCalcRow(selectedVal = "") {
      const row = document.createElement('div');
      row.className = "calc-row flex items-center gap-2 sm:gap-3 mb-2.5 pb-2.5 border-b border-white/5 last:border-0 last:mb-0 last:pb-0 fade-in";

      let optionsHTML = `<option value="0" disabled ${selectedVal === "" ? "selected" : ""}>-- Type --</option>`;
      for (const [price, name] of Object.entries(wastePrices)) {
        optionsHTML += `<option value="${price}" ${selectedVal === price ? "selected" : ""}>${name} - Rp ${price}</option>`;
      }

      row.innerHTML = `
        <div class="relative flex-1">
          <select class="calc-type w-full p-2 sm:p-2.5 text-[10px] sm:text-xs lg:text-sm text-white border appearance-none cursor-pointer bg-slate-900 border-white/10 rounded-lg focus:outline-none focus:border-primary">
            ${optionsHTML}
          </select>
          <i class="absolute text-sm -translate-y-1/2 sm:text-base pointer-events-none bx bx-chevron-down right-2 top-1/2 text-slate-400"></i>
        </div>
        <div class="relative w-16 sm:w-20 shrink-0">
          <input type="number" min="0" step="0.1" placeholder="Kg" value="1" class="calc-weight w-full p-2 sm:p-2.5 pr-5 text-[10px] sm:text-xs lg:text-sm text-white border bg-slate-900 border-white/10 rounded-lg focus:outline-none focus:border-primary text-center" />
          <span class="absolute text-[8px] sm:text-[10px] font-semibold -translate-y-1/2 right-2 top-1/2 text-slate-500">Kg</span>
        </div>
        <button onclick="removeCalcRow(this)" class="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-rose-400 bg-rose-500/10 hover:bg-rose-500 hover:text-white transition-colors rounded-lg border border-rose-500/20">
          <i class='text-sm bx bx-trash sm:text-base'></i>
        </button>
      `;
      container.appendChild(row);

      container.scrollTop = container.scrollHeight;
      calculateGrandTotal();
    }

    function removeCalcRow(btn) {
      btn.closest('.calc-row').remove();
      calculateGrandTotal();
    }

    function calculateGrandTotal() {
      const rows = document.querySelectorAll('.calc-row');
      let grandTotal = 0;
      let totalWeight = 0;

      rows.forEach(row => {
        const price = parseFloat(row.querySelector('.calc-type').value) || 0;
        const weight = parseFloat(row.querySelector('.calc-weight').value) || 0;
        grandTotal += (price * weight);
        if (price > 0) totalWeight += weight;
      });

      grandTotalEl.textContent = 'Rp ' + grandTotal.toLocaleString('id-ID');
      totalWeightEl.textContent = totalWeight.toFixed(1) + ' Kg Total';
    }

    container.addEventListener('input', (e) => {
      if (e.target.classList.contains('calc-weight')) calculateGrandTotal();
    });
    container.addEventListener('change', (e) => {
      if (e.target.classList.contains('calc-type')) calculateGrandTotal();
    });

    addCalcRow();


    // Scanner Logic
    const scannerBox = document.getElementById('scanner-box');
    const fileInput = document.getElementById('waste-image-input');
    const uploadState = document.getElementById('upload-state');
    const scanningState = document.getElementById('scanning-state');
    const imagePreview = document.getElementById('image-preview');
    const scanningText = document.getElementById('scanning-text');
    const resultState = document.getElementById('result-state');
    const identifiedWasteName = document.getElementById('identified-waste-name');
    const resetBtn = document.getElementById('reset-btn');

    const aiSimulatedResults = ["3500", "2000", "8000", "4500", "1000"];

    uploadState.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.src = e.target.result;

          uploadState.classList.add('hidden');
          scanningState.classList.remove('hidden');
          scanningText.classList.remove('hidden');
          resultState.classList.add('hidden');
          resultState.classList.remove('flex');
          scannerBox.classList.remove('hover:border-primary');

          setTimeout(() => {
            scanningState.classList.add('hidden');

            const randomValue = aiSimulatedResults[Math.floor(Math.random() * aiSimulatedResults.length)];
            const wasteName = wastePrices[randomValue];

            identifiedWasteName.textContent = wasteName;
            resultState.classList.remove('hidden');
            resultState.classList.add('flex');

            addCalcRow(randomValue);

            const calcBox = document.getElementById('calc-items-container');
            calcBox.classList.add('ring-2', 'ring-primary', 'transition-all');
            setTimeout(() => calcBox.classList.remove('ring-2', 'ring-primary'), 1500);

          }, 2000);
        };
        reader.readAsDataURL(file);
      }
    });

    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.value = "";
      imagePreview.src = "";

      resultState.classList.add('hidden');
      resultState.classList.remove('flex');
      uploadState.classList.remove('hidden');
      scannerBox.classList.add('hover:border-primary');
    });

