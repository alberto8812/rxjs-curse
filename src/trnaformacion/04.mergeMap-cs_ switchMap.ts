import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$
    .pipe(
        switchMap(() => interval$)
    )
    .subscribe(
        {
            next: val => console.log('next', val),
            complete: () => console.log('complete')
        }
    )