const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperamento', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    timestaps: false
  });
};