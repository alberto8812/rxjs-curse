import { distinct, from, of, pipe } from "rxjs";

const numeros$ = of(1, '1', 2, 3, 3, 4, 5, 6, 1);
numeros$
    .pipe(
        distinct()
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
    { nombre: 'Zero' },
    { nombre: 'Megaman' }
];

from(personajes)
    .pipe(
        distinct(p => p.nombre)
    )
    .subscribe(console.log);