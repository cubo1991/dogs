const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    Height: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Weight: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    Life_span: {
        type: DataTypes.INTEGER

    }
  },
  {
    timestaps: false
  });
};