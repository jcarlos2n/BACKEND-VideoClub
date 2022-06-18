
const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const UsersController = require('../controllers/UsersController');


//Endpoint-function links
router.get('/', auth, UsersController.getUser);
router.post('/adduser', UsersController.postUser);
router.post('/login', UsersController.loginUser);
router.put('/:id',auth, UsersController.updateUser);


//Export
module.exports = router;