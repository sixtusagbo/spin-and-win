const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-btn');
let value = Math.ceil(Math.random() * 3600);

spinButton.onclick = () => {
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3600);
};
