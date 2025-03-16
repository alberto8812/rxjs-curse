import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";



const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');



ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)

    )
    .subscribe(
        {
            next: data => {
                if (data === true) {
                    body.appendChild(loadingDiv);
                } else {
                    console.log(data);
                    body.removeChild(loadingDiv);
                }

            },
            error: error => {
                console.log(error);
                body.removeChild(loadingDiv);
            }
        }
    )

