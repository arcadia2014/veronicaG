const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

/**ctx.strokeRect(0, 0, 200, 200);
ctx.fillRect(20, 20, 160, 160);

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTO(120, 120);
ctx.moveTO(140, 120);
ctx.moveTO(115, 160);
ctx.fill();
*/

//LINEA LABERINTO
ctx.strokeStyle = 'white';
ctx.lineWidth = 5; // Grosor de la línea

//camino arriba

ctx.beginPath();
ctx.moveTo(0, 40); //arriba
ctx.lineTo(1300, 40);//curba de arriba
ctx.lineTo(1300, 500);  
ctx.lineTo(1400, 500); 
ctx.lineTo(1400, 200); 
ctx.lineTo(1400, 30); 
ctx.lineTo(2340, 30); 
ctx.lineTo(2350, 800); 
ctx.lineTo(1900, 800); 
ctx.lineTo(2350, 90000); 
ctx.stroke(); 

//camino de abajo

ctx.beginPath();
ctx.moveTo(0, 500); 
ctx.lineTo(900, 500); 
ctx.moveTo(900, 800); 
ctx.lineTo(900, 500); 
ctx.moveTo(900, 800);  
ctx.lineTo(10, 800); 
ctx.lineTo(10, 800);  
ctx.lineTo(0, 1500); 
ctx.lineTo(1500, 1500);
ctx.moveTo(700, 1100);  
ctx.lineTo(700, 1200);
ctx.moveTo(700, 1200);  
ctx.lineTo(1900, 1200);
ctx.moveTo(700, 1100);  
ctx.lineTo(1900, 1100); 
ctx.lineTo(1900, 1100);

ctx.stroke(); 


//Pacman
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(720, 950, 100, 0.2 * Math.PI, 1.8 * Math.PI, false);
ctx.lineTo(730, 950);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(720, 890, 10, 0, Math.PI * 2, false);
ctx.fill();

//fantasma 1 Azul

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(450, 218, 85, 70, 11, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath();
ctx.moveTo(215, 290); 
for (let i = 0; i < 7; i++) {
    ctx.arc(415 + i * 13, 290, 15, Math.PI, 0, true);
}
ctx.lineTo(375, 290); 
ctx.fill();

//ojos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(490, 200, 15, 0, Math.PI * 2, true); //H
ctx.arc(435, 200, 15, 0, Math.PI * 2, true); //D
ctx.fill();

// pupilas
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(490, 201, 7, 0, Math.PI * 2, true); 
ctx.arc(435, 200, 7, 0, Math.PI * 2, true); 
ctx.fill();


//fantasma 2 reed


ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(1640, 920, 90, 70, 11, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath();
ctx.moveTo(21500000, 12000); 

for (let i = 0; i < 6; i++) {
    ctx.arc(1600 + i * 15, 1000, 20, Math.PI, 0, true);
}
ctx.lineTo(1500, 1000); 
ctx.fill();

//ojos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(1680, 900, 15, 0, Math.PI * 2, true); //H
ctx.arc(1620, 900, 15, 0, Math.PI * 2, true); //D
ctx.fill();

// pupilas
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(1610 , 901, 7, 0, Math.PI * 2, true); 
ctx.arc(1670, 902, 7, 0, Math.PI * 2, true); 
ctx.fill();


//fantasma 3 pink


ctx.fillStyle = 'pink';
ctx.beginPath();
ctx.ellipse(210, 1210, 90, 70, 11, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath(); 

for (let i = 0; i < 7; i++) {
    ctx.arc(175 + i * 13, 1300, 13, Math.PI, 0, true);
}
ctx.lineTo(245, 1299);
ctx.fill();
ctx.fill();

//ojos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(200, 1199, 15, 0, Math.PI * 2, true); //H
ctx.arc(250, 1200, 15, 0, Math.PI * 2, true); //D
ctx.fill();

// pupilas
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(200, 1191, 8, 0, Math.PI * 2, true); 
ctx.arc(250, 1200, 8, 0, Math.PI * 2, true); 
ctx.fill();

//fantasma 2 reed


ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.ellipse(1640, 1380, 90, 70, 11, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath();
ctx.moveTo(21500000, 12000); 

for (let i = 0; i < 6; i++) {
    ctx.arc(15522 + i * 15, 1000, 20, Math.PI, 0, true);
}
ctx.lineTo(1500, 1000); 
ctx.fill();

//ojos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(1680, 900, 15, 0, Math.PI * 2, true); //H
ctx.arc(1620, 900, 15, 0, Math.PI * 2, true); //D
ctx.fill();

// pupilas
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(1610 , 901, 7, 0, Math.PI * 2, true); 
ctx.arc(1670, 902, 7, 0, Math.PI * 2, true); 
ctx.fill();


















//bolitas amarillas
ctx.fillStyle = 'yellow';

for (let i = 0; i< 15; i++){
    for(let j = 0; j< 15; j++ ){
        ctx.beginPath();
        ctx.arc(i * 500, j * 300, 10, 0, Math.PI * 2)
        ctx.fill();
    }
}

//bolitas rosas
ctx.fillStyle = 'pink';
ctx.moveTo(65, 65);
ctx.arc(999, 300, 40, 0, Math.PI * 2, true); 
ctx.fill();

ctx.fillStyle = 'pink';
ctx.moveTo(65, 65);
ctx.arc(2000, 600, 40, 0, Math.PI * 2, true); 
ctx.fill();

ctx.fillStyle = 'pink';
ctx.moveTo(65, 65);
ctx.arc(999, 1350, 40, 0, Math.PI * 2, true); 
ctx.fill();



