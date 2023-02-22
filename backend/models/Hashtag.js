const { DataTypes } = require("sequelize");
const { sequelize } = require("./../sequelize");

module.exports = sequelize.define(
  "Hashtag",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    tag: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "hashtags",
  }
);
