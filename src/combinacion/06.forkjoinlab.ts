import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`).pipe(catchError(async (err) => console.log('Error: ', err))),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(catchError(async (err) => console.log('Error: ', err))),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`).pipe(catchError(async (err) => console.log('Error: ', err)))
})
    .pipe(catchError((err) => of(err)))
    .subscribe(console.log);