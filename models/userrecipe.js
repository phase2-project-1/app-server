'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRecipe.belongsTo(models.User)
    }
  };
  UserRecipe.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please insert the Name! Value cant be empty!"
        }
      }
    },
    ingredient: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please insert the Ingredients! Value cant be empty!"
        }
      }
    },
    UserId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserRecipe',
  });
  return UserRecipe;
};