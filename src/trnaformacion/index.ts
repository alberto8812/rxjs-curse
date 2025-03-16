import { endWith, of, startWith } from "rxjs";


const numeros$ = of(1, 2, 3, 4, 5);


numeros$
    .pipe(
        startWith(0)
    )
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    })


numeros$
    .pipe(
        endWith(50)
    )
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    })