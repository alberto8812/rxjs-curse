import { asyncScheduler, of, range } from 'rxjs'

const src$ = range(-5, 10)

src$.subscribe(console.log)

