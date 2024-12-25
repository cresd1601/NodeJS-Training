module.exports = async (app) => {
  await app.db.sequelize.sync();

  if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('port'), () => {
      console.log(`NTasks API - Port ${app.get('port')}`);
    });
  }
};
