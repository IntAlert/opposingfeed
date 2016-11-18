'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    fb_id: DataTypes.STRING,
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_admin_approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    PartyId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Party);
        User.hasMany(models.Response);
      }
    }
  });
  return User;
};