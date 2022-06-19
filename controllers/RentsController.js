
const { Rent } = require('../models/index');

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

    let age18 = `SELECT users.age AS Edad FROM users WHERE id LIKE ${userId}`;
    let result18 = await Rent.sequelize.query(age18, {
        type : Rent.sequelize.QueryTypes.SELECT
    });
    let adultF = `SELECT films.adult FROM films where id LIKE ${filmId}`;
    let adult18 = await Rent.sequelize.query(adultF, {
        type : Rent.sequelize.QueryTypes.SELECT
    });
    if (adult18[0].adult != 0 && result18[0].Edad < 18) {
        res.send("No tienes edad suficiente para ver esta pelicula");
    }else{
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
    }
};

//Export
module.exports = RentsController;