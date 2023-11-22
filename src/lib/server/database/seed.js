// FILE USED TO SEED SQLITE DB FROM JSON DATA
import Database from 'better-sqlite3';
import fs from 'fs';

const db = new Database('rmc.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS all_cards (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        origin TEXT,
        rarity INTEGER NOT NULL,
        status TEXT,
        type TEXT,
        gender TEXT,
        price INTEGER NOT NULL
    );
`);

const db_json = JSON.parse(fs.readFileSync('C:/Users/micha/Desktop/Projects/rm-card-game/data/card_data.json', 'utf-8')).library;

const insert = db.prepare(`
        INSERT INTO all_cards (id, name, image, origin, rarity, status, type, gender, price) 
        VALUES (?,?,?, ?, ?, ?, ?, ?, ?);
`)

db_json.forEach(item => {
    insert.run(item.id, item.name, item.image, item.origin, item.rarity, item.status, item.type, item.gender, 7);
});

db.close();