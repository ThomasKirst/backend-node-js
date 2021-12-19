import { readFile, writeFile } from 'fs/promises';

export const saveToDb = async (database, databaseFile = 'db.json') => {
  try {
    await writeFile(databaseFile, JSON.stringify(database, null, 2));
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const loadFromDb = async (databaseFile = 'db.json') => {
  try {
    const database = await readFile(databaseFile, { encoding: 'utf8' });
    return JSON.parse(database);
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
