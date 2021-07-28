const sizeControl = document.querySelector('#font-size-control');
const textLable = document.querySelector('#text');

sizeControl.addEventListener('input', textSizeChange);

function textSizeChange() {
    textLable.style.fontSize = sizeControl.value + 'px'
    console.log(sizeControl.value )
}

