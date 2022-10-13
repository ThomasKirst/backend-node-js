import express from 'express';

import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ status: 'Server is up and running.' });
});

app.use(productsRoutes);
app.use(customersRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Server is started.'));
