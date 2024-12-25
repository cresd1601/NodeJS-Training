const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Task extends Model {}

  Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize, // We need to pass the connection instance
      modelName: "Task", // We need to choose the model name
    }
  );

  return Task;
};
