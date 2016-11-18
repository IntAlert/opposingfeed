'use strict';
module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    agree:DataTypes.BOOLEAN,
    ViewpointId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Story.belongsTo(models.Viewpoint);
      }
    }
  });
  return Story;
};