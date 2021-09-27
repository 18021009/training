const db = require('../../models');

const getUserDetail = async function (userId) {
    const user = await db.User.findOne({
        where: {
            id: userId,
        },
    });
    return JSON.parse(JSON.stringify(user));
};

module.exports = {
    getUserDetail,
};
