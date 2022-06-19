const { User } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');

//UserController object declaration
const UsersController = {};

UsersController.getUser = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    User.findAll()
    .then(data => {
    
        res.send(data)
    });
};

UsersController.postUser = async (req, res) => {
    let name = req.body.name;
    let dni = req.body.dni;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    let phone = req.body.phone;
    let age = req.body.age;
    let rol = req.body.rol;

    if (name === "" || dni === "" || email === "" || password === "" || phone === "" || age === "") {
        res.send("Rellena los campos que faltan");
    }else {
        User.create({
            name: name,
            dni: dni,
            email: email,
            password: password,
            phone: phone,
            age: age,
            rol: rol
        }).then(user => {
            res.send(`${user.name}, you have been added succesfully`);
    
        }).catch((error) => {
            res.send(error);
        });
    }
    
    
    
};

UsersController.loginUser = (req, res) => {

    let documentacion = req.body.email;
    let clave = req.body.password;

    User.findOne({
        where : {email : documentacion}

    }).then(usuarioEncontrado => {

        if(!usuarioEncontrado){
            res.send("Usuario o password incorrectos");
        } else {
            if( bcrypt.compareSync(clave, usuarioEncontrado.password)){
                //Ahora ya si hemos comprobado que el usuario existe (email es correcto) y el password SI corresponde a ese usuario

                //generamos el token, pasándole como primer argumento el usuarioEncontrado, segundo argumento es la frase secreta.
                let token = jwt.sign({ user: usuarioEncontrado }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                console.log(token);
                
                let loginOKmessage = `Welcome again ${usuarioEncontrado.name}`
                res.json({
                    loginOKmessage,
                    user: usuarioEncontrado,
                    token: token
                })
            };
        };

    }).catch(err => console.log(err));
};

UsersController.updateUser= async(req,res)=>{
   
    let name = req.body.name;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    let phone = req.body.phone;
    let age = req.body.age;
    let rol = req.body.rol;
    let id = req.params.id;
    await User.update({
        name: name,
        password: password,
        phone: phone,
        age: age,
        rol: rol
    },
    {
        where:{
            id:id
        }
    }).then(
        res.send('You have updated your user info')
    ).catch(err => console.log(err));
};
//Export
module.exports = UsersController;