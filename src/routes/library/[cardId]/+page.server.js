import 'dotenv/config';

export function load({ fetch, params }) {
    const fetchCard = async (id) => {
        const res = await fetch(`/api/cards/${id}`, {headers: {'Authorization': process.env.ADMIN_API_KEY}});
        const data = res.json();
        return data;
    }

    return {
        card: fetchCard(params.cardId)
    }
}