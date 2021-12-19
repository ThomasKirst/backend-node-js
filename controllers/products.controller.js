import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from 'fs';

function getProductForm(request, response) {
  response.send(`
      <form action="/products" method="POST">
        <input type="text" name="productname" />
        <button>Add product</button>
      </form>
  `);
}

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };

  readFile('db.json', (error, fileContents) => {
    if (error) {
      console.error(error.message);
      return response.json({ error: error.message });
    }
    const database = JSON.parse(fileContents);
    const products = database.products;
    products.push(newProduct);

    writeFile('db.json', JSON.stringify(database, null, 2), (error) => {
      if (error) {
        console.error(error.message);
        response.json({ error: error.message });
        return;
      }
      response.json(newProduct);
    });
  });
}

export { getProductForm, postProduct };
