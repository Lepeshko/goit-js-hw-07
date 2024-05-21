function createBoxes(amount) {
  const container = document.getElementById('boxes');
  container.innerHTML = ''; // Очищаємо попередні елементи

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    container.appendChild(box);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('[data-create]').addEventListener('click', function() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо значення input
  } else {
    alert('Please enter a number between 1 and 100.'); // Повідомлення про помилку
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const container = document.getElementById('boxes');
  container.innerHTML = ''; // Очищаємо вміст контейнера
}