import { interval, reduce, take, tap } from "rxjs";


interval(1000)
    .pipe(
        take(5),
        tap(console.log),
        reduce((acc, curr) => acc + curr, 0)
    )
    .subscribe(
        {
            next: (value) => console.log("Next:", value),
            complete: () => console.log("Complete")
        }
    );

