var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'bd_productos', //database
    'root', //user y 
    '', //password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports=sequelize;
