// const fs = require('fs');
// const path = require('path');
const { Sequelize } = require('sequelize');

const Models = require('./models/index.js');

let db = null;

module.exports = (app) => {
  if (!db) {
    const config = app.libs.config;

    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    const models = Models(sequelize);

    db = {
      sequelize,
      Sequelize,
      models: { ...models },
    };
  }

  return db;
};
