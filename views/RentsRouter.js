
const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const RentsController = require('../controllers/RentsController');


//Endpoint-function links
// router.get('/', FilmsController.getFilm);
router.get('/',isAdmin, RentsController.getRent);
router.post('/pedido',auth, RentsController.postRent);


//Export
module.exports = router;