function createBoxes(amount) {
  const container = document.getElementById('boxes');
  container.innerHTML = ''; 

  const fragment = document.createDocumentFragment(); 
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box); 
    size += 10;
  }

  container.appendChild(fragment); 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('[data-create]').addEventListener('click', function() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a valid number between 1 and 100.'); 
  } else {
    createBoxes(amount);
    input.value = ''; 
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const container = document.getElementById('boxes');
  container.innerHTML = ''; 
}
