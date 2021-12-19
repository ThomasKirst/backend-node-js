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

  const database = loadFromDb();
  const products = database.products;
  products.push(newProduct);

  saveToDb(database);

  response.json(newProduct);
}

export { getProductForm, postProduct };
