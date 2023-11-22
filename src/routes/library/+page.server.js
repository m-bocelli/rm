import 'dotenv/config';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
    const page = url.searchParams.get('page') ?? 1;
    const pageSize = url.searchParams.get('pageSize') ?? 20;

    const fetchCards = async () => {
        const res = await fetch(`/api/cards?page=${page}&pageSize=${pageSize}`, {headers: {'Authorization': process.env.ADMIN_API_KEY}});
        const data = await res.json();
        return data;
    }
    
    return {
        cards: fetchCards(),
        pageNum: page,
        pageSize: pageSize
    }
}