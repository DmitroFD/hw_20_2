const itemsOfGallery = document.querySelectorAll("img");

let total = 0;
itemsOfGallery[total].style.display = "block";

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    itemsOfGallery[total].style.display = "none"; // Приховуємо поточний елемент
    total += 1;
    if (total >= itemsOfGallery.length) {
      total = 0; // Повертаємось до першого елемента
    }
    itemsOfGallery[total].style.display = "block"; // Показуємо наступний елемент
  }
});

console.log(total);


// ...Array(amount) - робить з одного числоа масив

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButElement = controls.querySelector('button[data-action="create"]');
const deleteElementBut = controls.querySelector('button[data-action="remove"]');

function createBoxes(amount) {
      boxes.innerHTML = "";
    const baseSize = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        const size = baseSize + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomRgbColor();
        boxes.appendChild(box);
    }
}

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const boxes = document.getElementById("boxes");

createButElement.addEventListener("click", () => {
    createBoxes(input.value);
});

deleteElementBut.addEventListener("click", () => {
     boxes.innerHTML = "";
});





