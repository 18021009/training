const authApiRouter = require('../components/auth');
const userApiRouter = require('../components/users');
const productApiRouter = require('../components/product');

const routerManager = (app) => {
    authApiRouter(app);
    userApiRouter(app);
    productApiRouter(app);
};

module.exports = routerManager;
