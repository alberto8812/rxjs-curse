import { fromEvent, interval, takeUntil } from "rxjs";

const boton = document.createElement('button');
boton.innerText = 'Click me!';

document.body.appendChild(boton);

const counter$ = interval(1000);

const click$ = fromEvent(boton, 'click');

click$
    .pipe(
        takeUntil(counter$)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });