"use strict"

// Have the value of tip (%) displayed when incremented 
const tipValue = document.getElementById('tip-value');
const tipPercent = document.getElementById('tip-percent');
tipValue.innerText = tipPercent.value + '%'
tipPercent.addEventListener('input', (e) => {
  tipValue.innerText = e.target.value + '%'
});




