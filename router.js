//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const FilmsRouter = require('./views/FilmsRouter');
// const ProveedoresRouter = require('./views/ProveedoresRouter');
// const VentasRouter = require('./views/VentasRouter');

router.use('/users', UsersRouter);
router.use('/films', FilmsRouter);
// router.use('/proveedores', ProveedoresRouter);
// router.use('/ventas', VentasRouter);

//Export

module.exports = router;