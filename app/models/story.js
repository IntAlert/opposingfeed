'use strict';
module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    ViewpointId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Viewpoint);
      }
    }
  });
  return Story;
};