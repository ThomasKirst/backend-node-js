import { readFileSync, writeFile } from 'fs';

export const saveToDb = (database, databaseFile = 'db.json') => {
  writeFile(databaseFile, JSON.stringify(database, null, 2), (error) => {
    if (error) {
      console.error(error.message);
      response.json({ error: error.message });
    }
  });
};

export const loadFromDb = (databaseFile = 'db.json') => {
  try {
    const database = readFileSync(databaseFile, { encoding: 'utf8' });
    return JSON.parse(database);
  } catch (error) {
    console.error(error.message);
    return;
  }
};
