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
      type:DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    life_span:{
      type:DataTypes.STRING,
    },
    img:{
      type:DataTypes.STRING,
      defaultValue: 'https://c.tenor.com/oNklQuZAJVQAAAAC/pug-puglie.gif'
    }
  });

  const Temperaments = sequelize.define('temperaments', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
