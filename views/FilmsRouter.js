
const express = require('express');
const router = express.Router();

// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const FilmsController = require('../controllers/FilmsController');
const isAdmin = require('../middlewares/isAdmin');


//Endpoint-function links
router.get('/', FilmsController.getFilm);
router.get('/search/:model', FilmsController.searchFilm);
router.delete('/delete/:id',isAdmin, FilmsController.deleteById);
router.post('/postfilm', isAdmin, FilmsController.postFilm);


//Export
module.exports = router;