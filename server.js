import express from 'express';
import {
  getProductForm,
  postProduct,
} from './controllers/products.controller.js';

import {
  getCustomerForm,
  postCustomer,
} from './controllers/customers.controller.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', getProductForm);
app.post('/products', postProduct);

app.get('/customers', getCustomerForm);
app.post('/customers', postCustomer);

app.listen(4000, () => console.log('Server is started.'));
