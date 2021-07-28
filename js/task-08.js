const inputNumber = document.querySelector('input')
const button = {
    render: document.querySelector('[data-action = "render"]'),
    destroy: document.querySelector('[data-action = "destroy"]')
}
console.log(inputNumber)
console.log(button.render)
console.log(button.destroy)

const box = {
    width: '30px', height: '30px', color: 'red'
}


function createBoxes(amount) {
    
}