import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(url, {
    'Content-Type': 'application/json',
    'My-Custom-Header': 'Hello World',
    'Authorization': 'Bearer 123'
})

ajax.post(url, {
    id: 1,
    name: 'John Doe'
},// body 
    {
        'Content-Type': 'application/json',
        'My-Custom-Header': 'Hello World',
        'Authorization': 'Bearer 123'
    } // headers

)

ajax.put(url, {
    id: 1,
    name: 'John Doe'
},// body 
    {
        'Content-Type': 'application/json',
        'My-Custom-Header': 'Hello World',
        'Authorization': 'Bearer 123'
    } // headers
)

ajax.delete(url, {
    'Content-Type': 'application/json',
    'My-Custom-Header': 'Hello World',
    'Authorization': 'Bearer 123'
})

// otra forma de hacer peticiones de manera dinamica

ajax({
    url,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'My-Custom-Header': 'Hello World',
        'Authorization': 'Bearer 123'
    },
    body: {
        id: 1,
        name: 'John Doe'
    }
})