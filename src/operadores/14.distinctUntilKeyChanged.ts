import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of, pipe } from "rxjs";



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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log);