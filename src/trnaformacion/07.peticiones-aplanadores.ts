import { catchError, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// creando un formulario
const form = document.createElement('form');
const inputemail = document.createElement('input');
const intputpassword = document.createElement('input');
const button = document.createElement('button');



// configuraciones

inputemail.type = 'email';
inputemail.placeholder = 'email';
inputemail.name = 'email';
inputemail.value = 'eve.holt@reqres.in'

intputpassword.type = 'password';
intputpassword.placeholder = 'password';
intputpassword.name = 'password';
intputpassword.value = 'cityslicka'

button.textContent = 'Enviar';
button.type = 'submit';

form.appendChild(inputemail);
form.appendChild(intputpassword);
form.appendChild(button);

document.body.appendChild(form);

// helpers
const httpLogin = ({ email, password }) => {
    return ajax({
        url: 'https://reqres.in/api/login/login?delay=1',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email,
            password
        }
    })
        .pipe(

            map(response => response.response),
            catchError(error => {
                console.error('error', error);
                return of(error);
            }
            )
        );
}

// streams

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    mergeMap(httpLogin),

);

submitForm$
    .subscribe(
        {
            next: console.log,
            error: console.error,
            complete: () => console.log('complete')
        }
    );