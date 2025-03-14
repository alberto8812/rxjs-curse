import { audit, auditTime, fromEvent, map } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    map(({ x }) => x),
    auditTime(2000)


).subscribe(console.log);

