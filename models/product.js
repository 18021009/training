const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            this.belongsTo(models.Category, {
                as: 'category',
                foreignKey: 'categoryName',
                targetKey: 'categoryName',
            });
        }
    }
    Product.init({
        productCode: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        productName: {
            type: DataTypes.STRING,
        },
        categoryName: {
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};
