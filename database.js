const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la base de datos
const sequelize = new Sequelize('pruebadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion a BD exitosa.');
      } catch (error) {
        console.error('Error:', error);
      }
}


// sequelize.sync()

module.exports = {
    conectarDB,
    sequelize,
    Sequelize,
    DataTypes
}