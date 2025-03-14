

import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// const observable$ = range(1, 10);
// observable$
//     .pipe(
//         map<number, string>(value => (value * 10).toString())
//     )
//     .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyUpKeyPluck$ = keyUp$.pipe(
    pluck('key')
)
const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Tecla presionada')
)

keyUpCode$.subscribe(console.log);
keyUpKeyPluck$.subscribe(console.log);
keyUpMapTo$.subscribe(console.log);