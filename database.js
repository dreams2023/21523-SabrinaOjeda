const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la base de datos
const sequelize = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000

});


sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });



module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}