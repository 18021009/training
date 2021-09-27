import {
    respondSuccess,
    logSystemError,
} from '../../helpers/messageResponse';

import db from '../../models/index';

export async function getList(req, res) {
    try {
        const listUser = await db.User.findAll();
        return res.json(
            respondSuccess(JSON.parse(JSON.stringify(listUser))),
        );
    } catch (error) {
        return logSystemError(res, error, 'userController - getList');
    }
}

export async function create(req, res) {
    try {
        return res.json(respondSuccess({}));
    } catch (error) {
        return logSystemError(res, error, 'userController - create');
    }
}
export async function getDetail(req, res) {
    try {
        return res.json(respondSuccess({}));
    } catch (error) {
        return logSystemError(res, error, 'userController - getDetail');
    }
}
export async function update(req, res) {
    try {
        return res.json(respondSuccess());
    } catch (error) {
        return logSystemError(res, error, 'userController - update');
    }
}

export async function updatePassword(req, res) {
    try {
        return res.json(respondSuccess());
    } catch (error) {
        return logSystemError(res, error, 'userController - update');
    }
}

export async function deleteUser(req, res) {
    try {
        return res.json(respondSuccess());
    } catch (error) {
        return logSystemError(res, error, 'userController - deleteUser');
    }
}
