import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, 'click');
click$
    .pipe(
        debounceTime(3000)
    )
    .subscribe(console.log);

// ejemplo 2 

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');
input$.
    pipe(
        debounceTime(1000),
        map(event => event.target['value']),
        distinctUntilChanged()
    )
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('Complete')
    })