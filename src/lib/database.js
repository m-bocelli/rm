import { Database } from "sqlite3";


export default function getDatabase() {
    const db = new Database(process.env.DATABASE_URL, (err) => {
        if (err) {
            console.error('Failed to connect to DB', err);
        }
    });
    return db;
}