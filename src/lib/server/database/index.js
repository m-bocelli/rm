// Home of all the SQL stuff, makes the rest methods look cleaner
import 'dotenv/config';
import Database from 'better-sqlite3';

const db = new Database(process.env.DB_PATH);

export function getAllCards() {
    const stmnt = db.prepare('SELECT * FROM all_cards');
    const rows = stmnt.all();
    return rows;
}

export function getCard(id) {
    const stmnt = db.prepare(`SELECT * FROM all_cards WHERE id = ${id}`);
    const row = stmnt.get();
    return row;
}

export function findCards(searchTerm) {
    const stmnt = db.prepare(`SELECT * FROM all_cards WHERE LOWER(name) LIKE LOWER('%' || '${searchTerm}' || '%')`);
    const rows = stmnt.all();
    return rows;
}

export function getCardsByPage(page, pageSize) {
    const stmnt = db.prepare(`SELECT * FROM all_cards LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`);
    const rows = stmnt.all();
    return rows;
}