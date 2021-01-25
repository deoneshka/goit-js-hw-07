// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.querySelector('#counter');
const counterValueRef = document.querySelector('#value');
const decrementBtnRef = counterRef.firstElementChild;
const incrementBtnRef = counterRef.lastElementChild;

function increment() {
    counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
};

function decrement() {
    counterValueRef.textContent = Number(counterValueRef.textContent) - 1;
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);