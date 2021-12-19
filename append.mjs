import { appendFile } from 'fs';

const name = process.argv[2];
const fileName = process.argv[3] || 'users.txt';

appendFile(fileName, 'Name: ' + name + '\n', (error) => {
  if (error) {
    console.error(error.message);
    return false;
  }
  console.log(`File ${fileName} was written`);
});
