module.exports = async () => {
  console.info('\nDB Tearing down ...');

  await app.db.sequelize.close();
};
