import 'dotenv/config';
import { getCard } from '$lib/server/database/index.js';

// api/cards/[id] GET
export async function GET({ params, request }) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== process.env.ADMIN_API_KEY) {
        return new Response('Invalid credentials', {status: 401});
    }

    const data = getCard(params.id);

    return new Response(JSON.stringify(data), {status: 200, headers: {library: 'it\'s a card broh'}})
}