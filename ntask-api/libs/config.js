const config = {
  dev: {
    database: 'ntask',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask.sqlite',
      define: {
        underscored: true,
      },
    },
    jwtSecret: 'Nta$K-AP1',
    jwtSession: { session: false },
  },
  test: {
    database: 'ntask-test',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask-test.sqlite',
      logging: false,
      define: {
        underscored: true,
      },
    },
    jwtSecret: 'Nta$K-AP1',
    jwtSession: { session: false },
  },
};

module.exports = () => {
  return config[process.env.NODE_ENV];
};
