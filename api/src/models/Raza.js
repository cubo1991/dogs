const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      notNull: true
    },
    Nombre: {
      type: DataTypes.STRING,
      notNull: true
      
    },
    Altura: {
        type: DataTypes.INTEGER,
        notNull: true
    },
    Peso: {
        type: DataTypes.INTEGER,
        notNull: true

    },
    Años_De_Vida: {
        type: DataTypes.INTEGER

    }
  });
};