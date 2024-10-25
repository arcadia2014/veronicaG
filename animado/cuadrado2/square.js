const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 287;
let y = 198;
let width = 6;
let height = 4;
let crece = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = `hsl(${width % 360}, 50%, 50%)`;
    ctx.fillRect(x, y, width, height);

    // Actualizar valores de width y height dependiendo de crece
    if (crece) {
        width += 6;
        x -= 3;
        height += 4;
        y -= 2;
    } else {
        width -= 6;
        x += 3;
        height -= 4;
        y += 2;
    }

    // Validar límites para actualizar crece
    if (width >= 600 || width <= 3) {
        crece = !crece;
    }
}, 100);
