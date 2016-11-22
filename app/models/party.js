'use strict';
module.exports = function(sequelize, DataTypes) {
  var Party = sequelize.define('Party', {
    name: DataTypes.STRING,
    fb_id: DataTypes.STRING,
    fb_url: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Party.hasMany(models.User);
      }
    }
  });
  return Party;
};