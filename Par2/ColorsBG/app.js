const body = document.querySelector('body');
const btnchangue = document.getElementById('btnchangue');

const changeColor = () => {
    const color = prompt('Ingresa un color:');
    body.style.backgroundColor = color;
}

btnchangue.addEventListener('click',changeColor );
