const { DataTypes, sequelize } = require('../database');

const PublicacionSchema = sequelize.define('Publicaciones', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  url_imagen: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
},{
  tableName: 'publicaciones',
  timestamps: false
});


  module.exports = PublicacionSchema;


