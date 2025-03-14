
import { of, from } from 'rxjs'

/**
 * of: toma argumentos y genera una secuencia de valores
 * from: crea un observable a partir de un array, promise, iterable, observable
 */


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

//const source$ = from([1, 2, 3, 4, 5]);
//const source$ = of([1, 2, 3, 4, 5]);
//const source$ = from('Fernando');// 'F', 'e', 'r', 'n', 'a', 'n', 'd', 'o'

const source$ = from(fetch('https://api.github.com/users/klerith'));

source$.subscribe(async (resp) => {
    console.log(resp);
    const data = await resp.json();
    console.log(data);
});

//source$.subscribe(observer);