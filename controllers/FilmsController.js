
const { Film } = require('../models/index');

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// let authConfig = require('../config/auth');

//UserController object declaration
const FilmsController = {};

FilmsController.getFilm = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Film.findAll()
        .then(data => {

            res.send(data)
        });
};

FilmsController.searchFilm = async (req, res) => {
    let modelo = req.params.model;
    Film.findAll({
        where: { tittle: modelo }
    })
        .then(resultadoSearch => {
            if (resultadoSearch[0]?.dataValues.tittle != undefined) {
                res.send(resultadoSearch);
            } else {
                res.send("El titulo que busca no se encuentra disponible");
            }
        })
        .catch(err => console.log(err));
};

FilmsController.deleteById = async (req, res) => {
    let id = req.params.id;
    try {
        Film.destroy({
            where: {},
            truncate: false
        })
            .then(userDelete => {
                res.send(`${userDelete} has been deleted succesfully`);
            })
    } catch (error) {
        res.send(error);
    }
};
FilmsController.postFilm = async (req, res) => {

    let tittle = req.body.tittle;
    let duration = req.body.duration;
    let adult = req.body.adult;
    let genre = req.body.genre;
    let sinopsis = req.body.sinopsis;
    let director = req.body.director;
    let actors = req.body.actors;
    let release_date = req.body.release_date;


    Film.create({
        tittle: tittle,
        duration: duration,
        adult: adult,
        genre: genre,
        sinopsis: sinopsis,
        director: director,
        actors: actors,
        release_date: release_date
    }).then(film => {
        res.send(`${film.tittle}, this film have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = FilmsController;