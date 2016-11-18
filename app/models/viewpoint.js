'use strict';
module.exports = function(sequelize, DataTypes) {
  var Viewpoint = sequelize.define('Viewpoint', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Viewpoint.hasMany(models.Story);
      }
    }
  });
  return Viewpoint;
};