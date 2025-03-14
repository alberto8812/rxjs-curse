import { distinct, distinctUntilChanged, from, of, pipe } from "rxjs";

const numeros$ = of(1, '1', 1, 2, 3, 3, 4, 5, 6, 1);
numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Dr. Willy' },
    { nombre: 'X' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
];

from(personajes)
    .pipe(
        distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    )
    .subscribe(console.log);