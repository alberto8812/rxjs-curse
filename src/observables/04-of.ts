import { of } from 'rxjs';

const obs$ = of<number[]>(1, 2, 3, 4, 5);
//const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));
//trabajan de menera sincrona
obs$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Complete')
});