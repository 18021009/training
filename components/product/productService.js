const models = require('../../models');

export const checkIfProductExist = async (productCode) => {
    const product = await models.Product.findOne({
        where: {
            productCode,
        },
    });
    if (product != null) {
        return true;
    }

    return false;
};

export const checkIfCategoryExist = async (_categoryName) => {
    try {
        const category = await models.Category.findOne({
            where: {
                categoryName: _categoryName,
            },
        });
        if (category != null) {
            return true;
        }
        return false;
    } catch (e) {
        throw (e);
    }
};

