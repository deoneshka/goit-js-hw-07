// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsRef = document.querySelector('#controls');
const boxesWrapperRef = document.querySelector('#boxes');
const inputRef = controlsRef.firstElementChild;
const renderBtnRef = controlsRef.querySelector('button[data-action="render"]');
const destroyBtnRef = controlsRef.querySelector('button[data-action="destroy"]');

function randomColor() {
    const r = Math.floor(Math.random() * (256) + 10);
    const g = Math.floor(Math.random() * (256) + 10);
    const b = Math.floor(Math.random() * (256) + 10);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

function createBoxes(amount) {
    destroyBoxes();
    
    for (let i = 0; i < amount; i += 1) {
        const newBoxRef = document.createElement('div');
        newBoxRef.style.cssText = `width: ${i * 10 + 30}px; height: ${i * 10 + 30}px; background: ${randomColor()}; border: solid 1px`;
        boxesWrapperRef.append(newBoxRef);
    };
};

function destroyBoxes () {
  const boxesRef = boxesWrapperRef.querySelectorAll('div');
  boxesRef.forEach(box => box.remove());
}

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', destroyBoxes);