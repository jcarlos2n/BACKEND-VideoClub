
const { Rent } = require('../models/index');

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// let authConfig = require('../config/auth');

//UserController object declaration
const RentsController = {};

RentsController.getRent = (req, res) => {
    Rent.findAll()
    .then(data => {
        res.send(data)
    });
};

RentsController.postRent = async (req, res) => {
    let userId = req.body.userId;
    let filmId = req.body.filmId;
    let price = req.body.price;
    let return_date = req.body.return_date;
    

    Rent.create({
        userId: userId,
        filmId: filmId,
        price: price,
        return_date: return_date
    }).then(rent => {
        res.send(`Your rent have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    }); 
};

// UsersController.postRent = (req, res) => {

//     let documentacion = req.body.email;
//     let clave = req.body.password;

//     User.findOne({
//         where : {email : documentacion}

//     }).then(usuarioEncontrado => {

//         if(!usuarioEncontrado){
//             res.send("Usuario o password incorrectos");
//         } else {
//             if( bcrypt.compareSync(clave, usuarioEncontrado.password)){
//                 //Ahora ya si hemos comprobado que el usuario existe (email es correcto) y el password SI corresponde a ese usuario

//                 //generamos el token, pasándole como primer argumento el usuarioEncontrado, segundo argumento es la frase secreta.
//                 let token = jwt.sign({ user: usuarioEncontrado }, authConfig.secret, {
//                     expiresIn: authConfig.expires
//                 });

//                 console.log(token);
                
//                 let loginOKmessage = `Welcome again ${usuarioEncontrado.name}`
//                 res.json({
//                     loginOKmessage,
//                     user: usuarioEncontrado,
//                     token: token
//                 })
//             };
//         };

//     }).catch(err => console.log(err));
// };

//Export
module.exports = RentsController;