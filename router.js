//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
// const MueblesRouter = require('./views/MueblesRouter');
// const ProveedoresRouter = require('./views/ProveedoresRouter');
// const VentasRouter = require('./views/VentasRouter');

router.use('/users', UsersRouter);
// router.use('/muebles', MueblesRouter);
// router.use('/proveedores', ProveedoresRouter);
// router.use('/ventas', VentasRouter);

//Export

module.exports = router;