
import './styles.css';


let cuenta = [],
    numeroContadores = 0,
    arrayContenedor = [],
    arrayContadores = [],
    arrayIncrementar = [],
    arrayDecrementar = [],
    arrayReset = [],
    arrayCerrar =[]

// html
const wrapper = document.querySelector(".wrapper");
const nuevo = document.querySelector(".nuevo");

// eventos
nuevo.addEventListener('click', () => nuevoContador());

// metodos
const agregar = (indice) => arrayContadores[indice].innerText = cuenta[indice];

const quitar = (indice) => arrayContenedor[indice].remove();

const selector = (identidad) => document.querySelector(identidad);

const crearEventoElemento = (arr, funcion) => {
    const elemento = arr.at(-1)
    const indiceElemento = arr.length - 1;
    elemento.addEventListener('click', () => funcion(indiceElemento));
}

const nuevoContador = function() {

    // crear el html cuando se pulsa un nuevo contador
    const htmlContador = `
    <div class='contenedor contenedor${numeroContadores}'>
    <div class="cerrar cerrar${numeroContadores}">X</div>
        <h1>Contador</h1>
        
        <div class="contador contador${numeroContadores}">
        </div>
        
        <div class="botones">
            <button class="decrementar${numeroContadores}">
                Decrementar
            </button>
            <button class="reset${numeroContadores}">
                Reset
            </button>
            <button class="incrementar${numeroContadores}">
            Incrementar
            </button>
            </div>
            </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlContador;
    wrapper.append(div.firstElementChild);


    /* selecciono los elementos del nuevo contador y lo agrego a 
    su array correspondiente */
    const contenedor = selector(`.contenedor${numeroContadores}`);
    arrayContenedor.push(contenedor);

    const contador = selector(`.contador${numeroContadores}`);
    arrayContadores.push(contador);

    const incrementar = selector(`.incrementar${numeroContadores}`);
    arrayIncrementar.push(incrementar);

    const decrementar = selector(`.decrementar${numeroContadores}`);
    arrayDecrementar.push(decrementar);

    const reset = selector(`.reset${numeroContadores}`);
    arrayReset.push(reset);

    const cerrar = selector(`.cerrar${numeroContadores}`);
    arrayCerrar.push(cerrar);


    // crear evento para cada elemento del nuevo contador
    crearEventoElemento(arrayIncrementar, sumar);
    
    crearEventoElemento(arrayDecrementar, restar);
    
    crearEventoElemento(arrayReset, resetear);
    
    crearEventoElemento(arrayCerrar, cerrarContador);

    
    cuenta.push(0);

    agregar(numeroContadores);
    
    numeroContadores++;
    
};


const sumar = (indice) => {
    cuenta[indice] = cuenta[indice] + 1;
    agregar(indice);
};

const restar = (indice) => {
    cuenta[indice] = cuenta[indice] - 1;
    if (cuenta[indice] < 0) cuenta[indice] = 0;
    agregar(indice);
};

const resetear = (indice) => {
    cuenta[indice] = 0;
    agregar(indice);
};

const cerrarContador = (indice) => {
    cuenta[indice] = 0;
    if (cuenta.length <= 0) cuenta.push(0);
    quitar(indice);
};

