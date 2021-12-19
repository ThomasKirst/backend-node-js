import express from 'express';
import {
  getProductForm,
  postProduct,
} from './controllers/products.controller.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/products', postProduct);

app.get('/', getProductForm);

app.listen(4000, () => console.log('Server is started.'));
