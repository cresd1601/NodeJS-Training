const supertest = require('supertest');
const app = require('../index.js');

module.exports = async () => {
  console.info('\nDB Setting up ...');

  global.app = app;
  global.request = supertest(app);

  await app.db.sequelize.sync();
};
