import type { PageLoad } from './$types';
 
export const load = (async () => {


    const url = 'http://localhost:5000/login';
    const data = { userId: 1 };

    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    const res = await fetch('http://localhost:5000/test');
    const data2 = await res.json();

    return data2;
}) satisfies PageLoad;
