const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        fullName: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        birthday: {
            type: DataTypes.DATE,
        },
        gender: {
            allowNull: false,
            type: DataTypes.ENUM('male', 'female', 'other'),
            defaultValue: 'other',
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        createdBy: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedBy: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
