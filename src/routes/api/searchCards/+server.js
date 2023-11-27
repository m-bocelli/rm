import { getAllCards } from '$lib/server/database/index.js';
import { findCards } from '$lib/server/database/index.js';
import { json } from '@sveltejs/kit';

export function GET({url}) {
    const searchTerm = url.searchParams.get('searchTerm')?.toString();

    let data = [];
    if (!searchTerm) {
        // db function
        data = getAllCards;
    } else {
        // db function
        data = findCards(searchTerm) ?? [];
    }

    return json(data);
}