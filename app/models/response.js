'use strict';
module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define('Response', {
    UserId: DataTypes.INTEGER,
    ViewpointId: DataTypes.INTEGER,
    agree: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Response;
};