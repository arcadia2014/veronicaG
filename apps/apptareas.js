const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

let arrayTareas = [];

const addTareas = () => {
    const tarea = inputTarea.value;
    arrayTareas.push({
        tarea: tarea,
        estado: 'red',
        id: Math.floor(Math.random() * 1000)
    });
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    inputTarea.value = '';

    creaDivs();
};

const creaDivs = () => {
    tareasDiv.innerHTML = '';
    arrayTareas.forEach(tarea => {
        tareasDiv.appendChild(creaObjeto(tarea));
    });
};

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    const id = papa.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(t => t.id !== Number(id));
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    papa.remove();
};

const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p'); 
    p.innerText = tarea.tarea;
    const button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.addEventListener('click', eliminaObjeto);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert', tarea.estado);
    div.setAttribute('data-id', tarea.id);
    return div;
};

arrayTareas = localStorage.getItem('tareas')
            ? JSON.parse(localStorage.getItem('tareas'))
            : [];
creaDivs();

const changeColor = e => {
    const myDiv = e.target.parentElement;
    const id = myDiv.getAttribute('data-id');
    const idTarea = arrayTareas.findIndex(t => t.id === Number(id));

    if (myDiv.classList.contains('red')) {
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arrayTareas[idTarea].estado = 'yellow';
    } else if (myDiv.classList.contains('yellow')) {
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
        arrayTareas[idTarea].estado = 'green';
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
};

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTareas();
});

const input = document.getElementById('inputtarea');
input.addEventListener('focus', function() {
    this.placeholder = '';
});  
input.addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Escribe tu tarea aquí por favor';
    }
});
