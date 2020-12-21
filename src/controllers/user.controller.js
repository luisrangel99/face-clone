const UserModel = require('./../models/user.model');
const {saveLog} = require('./../util/log.util');

const UserController = {
    save: async (req, res) => {
        let {user, password} = req.body;
        user = user.toString();
        password = password.toString();
        let newUser = new UserModel({user, password});
        try {
            await newUser.save();
        } catch(err){
            let response = {
                ok: false,
                status: 501,
                data: {
                    message: `Error saving ${user} and its password ${password} into the data base`,
                    error: err,
                }
            }
            saveLog(JSON.stringify(response));
            return res.status(501).json(response);
        }
        return res.status(200).json({
            ok: true,
            status: 200,
            data: {
                message: 'User saved',
                error: null,
            }
        });
    },
    getAllUsers: async (req, res) => {
        try {
            var allUser = await UserModel.find({});
            if(!allUser || allUser.lenght < 1){
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    data: {
                        message: 'There is not users',
                        error: 'No users',
                    },
                });
            }
        } catch(err) {
            let response = {
                ok: false,
                status: 501,
                data: {
                    message: `Error getting all users from data base`,
                    error: err,
                }
            }
            saveLog(JSON.stringify(response));
            return res.status(501).json(response);
        }
        return res.status(200).json({
            ok: true,
            status: 200,
            data: {
                message: 'Users were gotten suceessfully',
                error: null,
                users: allUser
            }
        })
    },
}

module.exports = {
    UserController
}