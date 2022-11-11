const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    Height_max: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    Height_min: {
      type: DataTypes.DECIMAL,
      allowNull: false,
  },
    Weight_max: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    },
    Weight_min: {
      type: DataTypes.DECIMAL,
      allowNull: false,

  },
    Life_span: {
        type: DataTypes.INTEGER

    },
    Img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
};