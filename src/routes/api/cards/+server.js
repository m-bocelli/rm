import 'dotenv/config';
import getDatabase from '$lib/database.js';
// api/cards GET
export async function GET({ request }) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== process.env.ADMIN_API_KEY) {
        return new Response('Invalid credentials', {status: 401});
    }

    const db = getDatabase();

    db.all('SELECT * FROM all_cards', (err, rows) => {
        if (err) {
            return new Response('Failed to fetch data', {status: 500});
        } else {
            data = rows;
        }
    })

    return new Response([1,2], {status: 200, headers: {library: 'it\'s the lib broh'}})
}