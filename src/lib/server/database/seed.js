// FILE USED TO SEED SQLITE DB FROM JSON DATA
import sqlite3 from 'sqlite3';
import fs from 'fs';

const db = new sqlite3.Database('rmc.db');

db.run(`
    CREATE TABLE IF NOT EXISTS all_cards (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        origin TEXT,
        rarity INTEGER NOT NULL,
        status TEXT,
        gender TEXT,
        type TEXT,
        price INTEGER NOT NULL
    );
`);

const db_json = JSON.parse(fs.readFileSync('card_data.json', 'utf-8')).library;

const insert = db.prepare(`
        INSERT INTO all_cards (id, name, image, origin, rarity, status, type, gender, price) 
        VALUES (?,?,?, ?, ?, ?, ?, ?, ?);
`)

db.serialize(() => {
    db_json.forEach(item => {
        insert.run(item.id, item.name, item.image, item.origin, item.rarity, item.status, item.gender, item.type, 7);
    });
    insert.finalize();
})

db.close();