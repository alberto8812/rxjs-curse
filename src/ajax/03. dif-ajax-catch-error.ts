
import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'


const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.subscribe({
    next: (data) => console.log('data:', data),
    error: (err) => console.error('error:', err),
    complete: () => console.log('completed')
});

// obs2$.subscribe({
//     next: (data) => console.log('data:', data),
//     error: (err) => console.error('error:', err),
//     complete: () => console.log('completed')
// });