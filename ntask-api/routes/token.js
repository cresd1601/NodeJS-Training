const jwt = require('jwt-simple');

module.exports = (app) => {
  const cfg = app.libs.config;
  const User = app.db.models.User;

  app.post('/token', async (req, res) => {
    if (req.body.email && req.body.password) {
      try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ where: { email: email } });

        if (User.isPassword(user.password, password)) {
          const payload = { id: user.id };

          res.json({ token: jwt.encode(payload, cfg.jwtSecret) });
        } else {
          res.sendStatus(401);
        }
      } catch (error) {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  });
};
