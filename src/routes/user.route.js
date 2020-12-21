const express = require('express');
const {UserController} = require('./../controllers/user.controller');
const route = express.Router();

route.post('/api/user/save', UserController.save);
route.get('/api/user/get-users', UserController.getAllUsers);

module.exports = route;