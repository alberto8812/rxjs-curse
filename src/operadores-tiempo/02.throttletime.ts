import { asapScheduler, debounce, debounceTime, distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";

const click$ = fromEvent(document, 'click');
click$
    .pipe(
        throttleTime(3000)
    )
    .subscribe(console.log);

// ejemplo 2 

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');
input$.
    pipe(
        throttleTime(1000, asapScheduler, {
            leading: true,
            trailing: true
        }),
        map(event => event.target['value']),
        distinctUntilChanged()
    )
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('Complete')
    })