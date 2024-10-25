const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");
ctx.font = '24px serif';

let puntaje = 0;
let puntajeMaximo = 0;

const snake = [{
    x: 2,
    y: 1,
    show: function() {
        ctx.fillText('👻', this.x * 20, this.y * 20);
    }
},
{
    x: 1,
    y: 1,
    show: function() {
        ctx.fillText('👻', this.x * 20, this.y * 20);
    }
},
{
    x: 0,
    y: 1,
    show: function() {
        ctx.fillText('👻', this.x * 20, this.y * 20);
    }
}];

const food = {
    x: 0,
    y: 0,
    show: function(){
        ctx.fillText('🦴', this.x * 20, this.y * 20);
    },
    fadeIn: function(){
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
}

let direccion = 1; // 1: Derecha, 2: Abajo, 3: Izquierda, 4: Arriba
let gameOver = false;

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowRight" && direccion !== 3) direccion = 1;
    if(event.key === "ArrowDown" && direccion !== 4) direccion = 2;
    if(event.key === "ArrowLeft" && direccion !== 1) direccion = 3;
    if(event.key === "ArrowUp" && direccion !== 2) direccion = 4;
});

function eat(){
    if(snake[0].x === food.x && snake[0].y === food.y){
        food.fadeIn();
        snake.push({...snake[snake.length - 1]});
        puntaje++;
        if(puntaje > puntajeMaximo) puntajeMaximo = puntaje;
    }
}

function nextMove(){
    let x = snake[0].x;
    let y = snake[0].y;

    if (direccion === 1) x++;
    if (direccion === 2) y++;
    if (direccion === 3) x--;
    if (direccion === 4) y--;

    for(let i = snake.length - 1; i > 0; i--){
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    snake[0].x = x;
    snake[0].y = y;
}

function checkCollision() {
    // Cuando la serpiente choque con el borde del lienzo
    if (snake[0].x < 0 || snake[0].x >= 30 || snake[0].y < 0 || snake[0].y >= 20) {
        gameOver = true;
    }

    // gameOver cuando la serpiente choque con ella misma
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver = true;
        }
    }

    if (gameOver) {
        alert(`¡Perdiste! Puntaje: ${puntaje}, Puntaje Máximo: ${puntajeMaximo}`);
        resetGame();
    }
}

function resetGame() {
    snake.length = 3;
    snake[0] = {x: 2, y: 1, show: snake[0].show};
    snake[1] = {x: 1, y: 1, show: snake[1].show};
    snake[2] = {x: 0, y: 1, show: snake[2].show};
    puntaje = 0;
    direccion = 1;
    gameOver = false;
    food.fadeIn();
}

function drawScore() {
    ctx.font = '16px serif';
    ctx.clearRect(0, 0, lienzo.width, 40); 
    ctx.fillText(`Puntaje: ${puntaje}`, 10, 30);
    ctx.fillText(`Puntaje Máximo: ${puntajeMaximo}`, 200, 30);
}

function draw() {
    ctx.clearRect(0, 40, lienzo.width, lienzo.height); 
    snake.forEach(segment => segment.show());
    food.show();
}

function gameLoop() {
    if (!gameOver) {
        nextMove();
        eat();
        checkCollision();
        draw();
        drawScore();  
    }

}

food.fadeIn();
setInterval(gameLoop, 200);
