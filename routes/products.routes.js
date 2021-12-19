import express from 'express';

import {
  getProductForm,
  postProduct,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products', getProductForm);
router.post('/products', postProduct);

export default router;
