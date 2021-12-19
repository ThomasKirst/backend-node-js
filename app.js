const fs = require('fs');

const name = 'Thomas';

fs.writeFile('user.txt', 'Name: ' + name, (error) => {
  if (error) {
    console.error(error.message);
    return false;
  }
  console.log(`File was written`);
});
