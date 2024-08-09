import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db = null;

async function getDb() {
  if (!db) {
    db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    });
    
    await db.exec(`
      CREATE TABLE IF NOT EXISTS gps_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        gps TEXT,
        date TEXT,
        location TEXT,
        tel TEXT,
        processing TEXT,
        tracking TEXT,
        reference TEXT,
        region TEXT,
        service TEXT
      )
    `);
  }
  return db;
}

export { getDb };