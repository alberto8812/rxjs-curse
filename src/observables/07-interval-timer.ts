

import { interval, timer } from 'rxjs'

const observer = {
    next: val => console.log('next:', val),
    error: err => console.log('error:', err),
    complete: () => console.log('complete')
}
const hoyEn5 = new Date() // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)  // ahora + 5 segundos

const interval$ = interval(1000)

//convina el interval con el timer incia en 2 segundos y emite cada segundo
//const timer$ = timer(2000, 1000)
const timer$ = timer(hoyEn5)


//hacemos la subscripcion
//const subscription = interval$.subscribe(observer)
const timerSubscription = timer$.subscribe(observer)