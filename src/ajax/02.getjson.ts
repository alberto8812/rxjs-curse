
import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'


const url = 'https://api.github.com/users?per_page=5';

const getError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of([]); // return an observable with empty array
}

ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'My-Custom-Header': 'Hello World',
    'Authorization': 'Bearer 123'
})
    .pipe(
        catchError(getError)
    )
    .subscribe(
        {
            next: (data) => console.log('data:', data),
            error: (err) => console.error('error:', err),
            complete: () => console.log('completed')
        }
    );
