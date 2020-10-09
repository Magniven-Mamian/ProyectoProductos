const controllers = {}


//importar el modelo y sequelize
var sequelize = require('../model/database');
const Categoria = require('../model/Categoria');

controllers.create = async (req, res) => {

    
    res.send("dd");

}

module.exports = controllers;
