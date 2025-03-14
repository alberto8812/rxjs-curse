import { map, range, tap } from 'rxjs';
const numeros$ = range(1, 10);
numeros$
    .pipe(
        tap(x => {
            console.log('antes', x);
            return 100;
        }
        ),
        map(val => val * 10),
        tap({
            next: val => console.log('despues', val),
            complete: () => console.log('Se termino todo')
        })
    )
    .subscribe(val => console.log(val));