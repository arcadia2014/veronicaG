function updateColor() {
    // Obtiene el valor del control deslizante para el color rojo
    const r = document.getElementById('red').value;
    // Obtiene el valor del control deslizante para el color verde
    const g = document.getElementById('green').value;
    // Obtiene el valor del control deslizante para el color azul
    const b = document.getElementById('blue').value;

    // Crea una cadena de texto en formato RGBA usando los valores obtenidos
    const colorRgba = `rgba(${r}, ${g}, ${b}, 1)`;

    // Obtiene el div que mostrará el color mezclado
    const colorBox = document.getElementById('colorBox');
    // Cambia el color de fondo del div a la mezcla de colores
    colorBox.style.backgroundColor = colorRgba;
    // Muestra el valor del color en el texto del div
    colorBox.textContent = colorRgba;

    // Actualiza el texto que muestra el valor actual del componente rojo
    document.getElementById('redValue').textContent = r;
    // Actualiza el texto que muestra el valor actual del componente verde
    document.getElementById('greenValue').textContent = g;
    // Actualiza el texto que muestra el valor actual del componente azul
    document.getElementById('blueValue').textContent = b;
}

// Agrega un evento que llama a updateColor() cada vez que se cambia el valor del control deslizante de rojo
document.getElementById('red').addEventListener('input', updateColor);
// Agrega un evento que llama a updateColor() cada vez que se cambia el valor del control deslizante de verde
document.getElementById('green').addEventListener('input', updateColor);
// Agrega un evento que llama a updateColor() cada vez que se cambia el valor del control deslizante de azul
document.getElementById('blue').addEventListener('input', updateColor);

// Llama a updateColor() al cargar la página para establecer el color inicial
updateColor();
