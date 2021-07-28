//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')

let cValue = 0; 


const increment = () => {
    console.log('increment')
    cValue += 1
    counterValue.textContent = cValue;
}

const decrement = () => {
    console.log('decrement')
    cValue -= 1
    counterValue.textContent = cValue;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);









//const button = document.querySelector('[data-action="increment"]');
//const click = () => { console.log('clicked') };
//button.addEventListener('click', click);