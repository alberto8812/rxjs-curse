import { of, interval, take, delay, forkJoin } from 'rxjs';

const numero$ = of(1, 2, 3, 4, 5, 6);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(
    {
        numeros: numero$,
        intervalo: intervalo$,
        letras: letras$
    }
).subscribe(console.log);