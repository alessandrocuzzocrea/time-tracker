import type { PageLoad } from './$types';
 
export const load = (async () => {
    const res = await fetch('http://localhost:5000/test');
    const data = await res.json();

    return data;
}) satisfies PageLoad;
