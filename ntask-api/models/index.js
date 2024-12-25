const User = require('./user.js');
const Task = require('./task.js');

module.exports = (sequelize) => {
  const ModelUser = User(sequelize);
  const ModelTask = Task(sequelize);

  ModelUser.hasMany(ModelTask);
  ModelTask.belongsTo(ModelUser);

  return {
    User: ModelUser,
    Task: ModelTask,
  };
};
