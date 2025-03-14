import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10)
    .pipe(
        filter(value => value % 2 === 1)
    ).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}


const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes)
    .pipe(
        filter(personaje => personaje.tipo === 'heroe')
    )
    .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$
    .pipe(
        map(event => event.code),// mapea el evento a su propiedad code
        filter(key => key === 'Enter')// filtra los eventos que no sean Enter
    )
    .subscribe(console.log);