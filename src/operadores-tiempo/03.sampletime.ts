import { fromEvent, map, pipe, sample, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        sampleTime(2000),
        map(({ x, y }) => ({ x, y }))


    )
    .subscribe({
        next: (val) => console.log('next', val),
        error: (err) => console.log('error', err),
        complete: () => console.log('complete')
    });