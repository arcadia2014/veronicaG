const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const centerX = 300;
const centerY = 200;
let radio = 1;
let crece = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    
    ctx.fillStyle = `hsl(${radio % 360}, 50%, 50%)`;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radio, 0, Math.PI * 2);
    ctx.fill();
   
    if (crece) {
        radio++;
    } else {
        radio--;
    }
    
    if (radio >= 300 || radio <= 1) {
        crece = !crece;
    }
}, 100);
