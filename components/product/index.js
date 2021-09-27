import { authenticate } from '../../middleware/auth';
import {
    getList, createProduct, updateProduct, deleteProduct,
} from './productController';
import { creatProductValidator, updateProductValidator, deleteProductValidator } from './productValidator';

const express = require('express');

module.exports = (app) => {
    const router = express.Router();
    router.get('/', authenticate(), getList);
    router.post('/', authenticate(), creatProductValidator, createProduct);
    router.put('/update', authenticate(), updateProductValidator, updateProduct);
    router.post('/delete', authenticate(), deleteProductValidator, deleteProduct);
    app.use('/api/product', router);
};
