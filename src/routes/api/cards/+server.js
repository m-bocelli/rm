import 'dotenv/config';
import { getAllCards } from '$lib/server/database/index.js';

// api/cards GET
export async function GET({ request }) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== process.env.ADMIN_API_KEY) {
        return new Response('Invalid credentials', {status: 401});
    }

    const data = getAllCards();

    return new Response(JSON.stringify(data), {status: 200, headers: {library: 'it\'s the lib broh'}})
}