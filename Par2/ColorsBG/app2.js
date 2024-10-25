const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange'); 

const changeColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = randomColor;
}

btnChange.addEventListener('click', changeColor);
