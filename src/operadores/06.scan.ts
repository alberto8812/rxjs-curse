import { from, scan } from "rxjs";

const numeros = [1, 2, 3, 4, 5];

//scan
from(numeros).pipe(
    scan((acumulador, valorActual) => acumulador + valorActual, 0)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    },)
);