//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const FilmsRouter = require('./views/FilmsRouter');
const RentsRouter = require('./views/RentsRouter');

router.use('/users', UsersRouter);
router.use('/films', FilmsRouter);
router.use('/rent', RentsRouter);

//Export

module.exports = router;