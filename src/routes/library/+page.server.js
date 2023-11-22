import 'dotenv/config';
import { getAllCards } from '../../lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    
    const fetchCards = async () => {
        const res = await fetch('/api/cards', {headers: {'Authorization': process.env.ADMIN_API_KEY}});
        const data = await res.json();
        return data;
    }
    
    return {
        cards: fetchCards(),
    }
}