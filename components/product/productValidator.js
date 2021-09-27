import { respondWithError } from '../../helpers/messageResponse';
import { ErrorCodes } from '../../helpers/constants';

const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const Joi = BaseJoi.extend(Extension);

export function creatProductValidator(req, res, next) {
    const { body } = req;
    const validSchema = Joi.object().keys({
        productCode: Joi.string().max(255).required(),
        productName: Joi.string().max(255).required(),
        categoryName: Joi.string().max(255).required(),
    });

    const result = Joi.validate(body, validSchema);

    if (result.error) {
        return res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
    }
    next();
}

export function updateProductValidator(req, res, next) {
    const { body } = req;
    const validSchema = Joi.object().keys({
        productCode: Joi.string().max(255).required(),
        productName: Joi.string().max(255).required(),
        categoryName: Joi.string().max(255).required(),
    });

    const result = Joi.validate(body, validSchema);

    if (result.error) {
        return res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, result.error.message, result.error.details));
    }
    next();
}

export function deleteProductValidator(req, res, next) {
    const { body } = req;
    console.log(req);
    console.log(body);
    const validSchema = Joi.object().keys({
        productCode: Joi.string().max(255).required(),
    });

    const results = Joi.validate(body, validSchema);

    if (results.error) {
        return res.json(respondWithError(ErrorCodes.ERROR_CODE_INVALID_PARAMETER, results.error.message, results.error.details));
    }
    next();
}
