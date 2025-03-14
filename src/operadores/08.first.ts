import { first, fromEvent, map } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        first<{ clientX: number; clientY: number }>(event => event.clientY >= 150)
    )
    .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Completed')
    });

