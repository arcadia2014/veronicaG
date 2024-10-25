function modificacion() {
    const div = document.getElementById('div');
    
    const ancho = document.getElementById('ancho').value;
    const largo = document.getElementById('largo').value;
    const sombra = document.getElementById('sombra').value;
    const radio = document.getElementById('radio').value;
    const transparencia = document.getElementById('transparencia').value / 100;
    const color = document.getElementById('color').value; //obtener color

    div.style.width = ancho + 'px';
    div.style.height = largo + 'px';
    div.style.boxShadow = `1px 1px ${sombra}px rgba(0, 0, 0, ${transparencia})`; //normalizamos la transparencia
    div.style.borderRadius = radio + 'px';
    div.style.backgroundColor = color;
}
