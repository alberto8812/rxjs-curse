import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');


texto.innerHTML = `
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br>    
                    <br>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    
                    `

const body = document.querySelector('body');
body.appendChild(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.appendChild(progressBar);

// funcion que calcule el porcentaje de scroll  
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


//streams

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(

    map(event => calcularPorcentajeScroll(event))
)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
}
)