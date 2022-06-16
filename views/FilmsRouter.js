
const express = require('express');
const router = express.Router();

// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const FilmsController = require('../controllers/FilmsController');


//Endpoint-function links
router.get('/', FilmsController.getFilm);
router.get('/search/:model', FilmsController.searchFilm);
// router.post('/login', UsersController.loginUser);


//Export
module.exports = router;