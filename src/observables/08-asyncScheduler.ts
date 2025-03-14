
import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 300);
// setInterval(() => { }, 300);

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

//reacibe una funcion y un tiempo en milisegundos que se ejecutara
asyncScheduler.schedule(saludar, 2000);
//recibe una funcion, un tiempo en milisegundos y un argumento que se pasara a la funcion que es el estado solo es un argumento
//para enviar mas argumentos se debe enviar un objeto
asyncScheduler.schedule(saludar2, 3000, 'Fernando');


//argumentos funcion, tiempo, estado
const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);

}, 3000, 0);


asyncScheduler.schedule(() => subs.unsubscribe(), 6000);