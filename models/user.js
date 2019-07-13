'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.task);
  };
  return user;
};
