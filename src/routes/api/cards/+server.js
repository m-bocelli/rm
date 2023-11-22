import 'dotenv/config';
import { getAllCards, getCardsByPage } from '$lib/server/database/index.js';

// api/cards GET
export async function GET({ request, url }) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== process.env.ADMIN_API_KEY) {
        return new Response('Invalid credentials', {status: 401});
    }

    const page = url.searchParams.get('page');
    const pageSize = url.searchParams.get('pageSize');

    let data = [];
    
    if (page && pageSize) {
        data = getCardsByPage(page, pageSize);
    } else if (page) {
        data = getAllCards();
    } else if (pageSize) {
        data = getCardsByPage(0, pageSize);
    } else {
        data = getAllCards();
    }

    return new Response(JSON.stringify(data), {status: 200, headers: {library: 'it\'s the lib broh'}})
}