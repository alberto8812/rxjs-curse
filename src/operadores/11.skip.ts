import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerText = 'Click me!';

document.body.appendChild(boton);

const counter$ = interval(1000);

const click$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap')),
    skip(1)
);

click$
    .pipe(
        takeUntil(counter$)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });