// TODO 9: Sequelize model definition for 1st table
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Lead', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Lead;
}