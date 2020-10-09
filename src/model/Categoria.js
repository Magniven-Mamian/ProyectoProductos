var Sequelize = require('sequelize');
var sequelize = require('./database');


var nametable = 'Categoria';

var Categoria = sequelize.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
  
});

module.exports=Categoria;
