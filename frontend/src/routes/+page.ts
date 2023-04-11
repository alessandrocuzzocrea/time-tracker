import type { PageLoad } from './$types';

export const load = (async () => {
    const res = fetch('http://localhost:5000/api/me');
    const data = (await res).json();
    return data;
}) satisfies PageLoad;
