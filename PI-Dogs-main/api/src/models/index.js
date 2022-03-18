const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Dog = sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    life_span:{
      type:DataTypes.INTEGER,
    }
  });

  const Temperaments = sequelize.define('temperaments', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
