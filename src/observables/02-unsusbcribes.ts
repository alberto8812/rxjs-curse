import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}



const intervalo$ = new Observable<number>(
    //impmnetamentamos el subscribe
    subcriber => {
        //crear  contados

        let contador = 0;
        const interval = setInterval(() => {
            subcriber.next(contador++);
        }, 1000);

        setTimeout(() => {
            subcriber.complete();
        }, 2500);

        return () => {
            clearInterval(interval);// permite limpiar el intervalo
            console.log('Intervalo destruido');
        }
    }
)

const subs = intervalo$.subscribe(observer);
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
subs.add(subs1);
subs.add(subs2);
//vamos a cancelar la subscripcion
setTimeout(() => {
    subs.unsubscribe();
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    console.log('Completado timeout');
}, 3000);
