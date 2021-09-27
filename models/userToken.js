const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                as: 'User',
                foreignKey: 'userId',
                targetKey: 'id',
            });
        }
    }
    UserToken.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER(10).UNSIGNED,
        },
        token: {
            allowNull: false,
            type: DataTypes.BLOB,
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        type: {
            allowNull: false,
            type: DataTypes.ENUM('reset_password', 'active_user', 'refresh_token'),
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        createdBy: {
            allowNull: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedBy: {
            allowNull: true,
            type: DataTypes.INTEGER(10).UNSIGNED,
        },
    }, {
        sequelize,
        modelName: 'UserToken',
    });
    return UserToken;
};
