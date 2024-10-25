const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function() {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;  // Generar un color aleatorio en formato RGB para la bolita
        ctx.fillStyle = randomColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();

    if (right) {
        x++;
    } else {
        x--;
    }

    if (down) {
        y++;
    } else {
        y--;
    }

    if (x >= 600 || x <= 10) {
        right = !right;
    }
    if (y >= 400 || y <= 10) {
        down = !down;
    }
}, 5);
