import { fromEvent, map, takeWhile } from "rxjs";



const click$ = fromEvent<MouseEvent>(document, 'click');
click$
    .pipe(
        map(({ x, y }) => ({ x, y }))
        ,
        takeWhile(({ y }) => y <= 200, true)// el true es para que incluya el valor que no cumple la condicion
    )
    .subscribe({
        next: (event) => console.log(event),
        error: (err) => console.error(err),
        complete: () => console.log('Complete')
    });