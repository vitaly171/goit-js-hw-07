const inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')

console.log(inputName)
console.log(outputName)

inputName.oninput = () => {
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец'
    }

    else {
        outputName.textContent = inputName.value
    }
}
