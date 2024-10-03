const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-ingr');
const botonEliminarTodas= document.querySelector('#boton-eliminar-todo');
const botonTacharTodas= document.querySelector('#boton-tachar-todo');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let LIST = []; // Inicializa LIST
let id = 0; // ID de las tareas

// Crear fecha actualizada
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'long', day: 'numeric',year: 'numeric' ,timeZone:'America/Lima' });


// Guardar lista en localStorage
function guardarLocalStorage() {
    localStorage.setItem('TODO', JSON.stringify(LIST));
}

// Cargar lista de localStorage
function obtenerLocalStorage() {
    const data = localStorage.getItem('TODO');
    if (data) {
        LIST = JSON.parse(data);
        id = LIST.length; // Ajusta el ID para que coincida con el tamaño de la lista cargada
        cargarLista(LIST);
    }
}



// Función para agregar tarea
function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) return;

    const REALIZADO = realizado ? check : uncheck;
    const LINE = realizado ? lineThrough : '';

    const elemento = `
        <li id="elemento">
            <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
        </li>
    `;
    lista.insertAdjacentHTML("beforeend", elemento);
}

// Función para agregar tarea desde el input
function agregarDesdeInput() {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false);
        LIST.push({ nombre: tarea, id: id, realizado: false, eliminado: false });
        guardarLocalStorage(); 
        input.value = ''; // Limpiar input
        id++; // Incrementar ID
        console.log(LIST);
    }
}

// Eventos para agregar tarea
botonEnter.addEventListener('click', agregarDesdeInput);
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        agregarDesdeInput();
    }
});

// Funciones para manejar tarea realizada y eliminada
function tareaRealizada(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(lineThrough);
    LIST[element.id].realizado = !LIST[element.id].realizado;
    guardarLocalStorage(); //GUardar cambios
}

function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado = true;
    console.log(LIST);
    guardarLocalStorage();
}

// Evento para manejar clic en la lista
lista.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

    if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
});

botonEliminarTodas.addEventListener('click', function(){
    LIST=[]
    //Se eleimina la lista en el DOM
    lista.innerHTML='';
    guardarLocalStorage(); // Limpiar localStorage
});

botonTacharTodas.addEventListener('click', function(){
    //Recorre la lista y tacha las tareas
    LIST.forEach((tarea,index) =>{
        tarea.realizado=true;
        const elemento = document.getElementById(index); // Obtener el elemento por ID
        if (elemento) {//verifica que el elemento este en el DOM para actualizarlo visualmente
            elemento.classList.remove(uncheck); // Quita clase de no realizado
            elemento.classList.add(check); // Cambia el ícono al de realizado
            elemento.parentNode.querySelector('.text').classList.add(lineThrough); // Tacharlo
        }
        guardarLocalStorage();
    });
});


// Función para cargar lista
function cargarLista(array) {
    array.forEach(function(item) {
        agregarTarea(item.nombre, item.id, item.realizado, item.eliminado);
    });
}


document.addEventListener('DOMContentLoaded', obtenerLocalStorage);