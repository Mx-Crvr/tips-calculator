"use strict"

// Global variables
const billAmount = document.getElementById('bill-amount')
const tipPercent = document.getElementById('tip-percent');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn-2');
const answers = document.getElementById('answers');
const spinner = document.getElementById('spinner');
const billInput = document.getElementById('bill-input');
const tipInput = document.getElementById('tip-input');
const heading = document.getElementById('heading')

// Have the value of tip (%) displayed when incremented 
const tipValue = document.getElementById('tip-value');
tipValue.innerText = tipPercent.value + '%';
tipPercent.addEventListener('input', (e) => {
  tipValue.innerText = e.target.value + '%';
});

const getTip = () => +((tipPercent.value / 100) * billAmount.value)
const getTotal = () => (+billAmount.value) + getTip();
const showSpinner = () => spinner.style.display = 'block';
const hideSpinner = () => spinner.style.display = 'none';

btn.addEventListener('click', () => {
  if (billAmount.value == '') {
    alert('Please enter your bill amount')
  } else {
    btn.style.display = 'none';
    showSpinner();
    billInput.style.display = 'none';
    tipInput.style.display = 'none';
    heading.style.display = 'none';
    setTimeout(() => {
      hideSpinner();
      tipAmount.innerText = getTip();
      totalAmount.innerText = getTotal();
      //UI stuff 
      btn2.style.display = 'block';
      answers.style.display = 'flex';
    }, 1500);
    
  }
});

btn2.addEventListener('click', () => {
  billAmount.value = '';
  tipPercent.value = '10';
  answers.style.display = 'none';
  btn.style.display = 'block';
  btn2.style.display = 'none';
  billInput.style.display = 'flex';
  tipInput.style.display = 'flex';
  heading.style.display = 'block';
  billAmount.focus();
})





