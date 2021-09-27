import { respondWithError, logSystemError, respondSuccess } from '../../helpers/messageResponse';
import { checkIfCategoryExist, checkIfProductExist } from './productService';

const models = require('../../models');

export async function getList(req, res) {
    try {
        const listProduct = await models.Product.findAll({
            attributes: ['productCode', 'productName', 'categoryName'],
        });
        res.json(respondSuccess(JSON.parse(JSON.stringify(listProduct))));
    } catch (e) {
        throw (e);
    }
}

export async function createProduct(req, res) {
    try {
        const { productCode, productName, categoryName } = req.body;
        const isCategoryExist = await checkIfCategoryExist(categoryName);
        const isProductCodeExist = await checkIfProductExist(productCode);
        if (isCategoryExist) {
            if(isProductCodeExist){
                return res.json(respondWithError('productCode existed'));
            }else{
                const product = await models.Product.create({
                    productCode,
                    productName,
                    categoryName,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                });
                return res.json(respondSuccess(JSON.parse(JSON.stringify(product))));
            }
        }else{
            return res.json(respondWithError('category not exist'));
        }
    } catch (error) {
        return logSystemError(res, error, 'ProductController - create product');
        throw (error);
    }
}

export async function updateProduct(req, res) {
    try {
        const { productCode, productName, categoryName } = req.body;
        const isCategoryExist = await checkIfCategoryExist(categoryName);
        if (isCategoryExist) {
            const rs = await models.Product.update(
                {
                    productName,
                    categoryName,
                    categoryName,
                    updatedAt: Date.now(),
                    updatedBy: req.loginUser.id,
                },
                {
                    where: {
                        productCode,
                    },
                },
            );
            return res.json(respondSuccess(JSON.parse(JSON.stringify(rs))));
        }
        return res.json(respondWithError('category not exist'));
    } catch (error) {
        return logSystemError(res, error, 'ProductController - update product');
    }
}

export async function deleteProduct(req, res) {
    try {
        const { productCode } = req.body;
        const rs = await models.Product.destroy({
            where: {
                productCode,
            },
        });

        return res.json(respondSuccess('delete success'));
    } catch (error) {
        return logSystemError(res, error, 'ProductController - delete product');
    }
}



