const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

module.exports = (app) => {
  const User = app.db.models.User;
  const cfg = app.libs.config;
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  };

  const strategy = new Strategy(params, async (payload, done) => {
    try {
      const user = await User.findByPk(payload.id);

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    } catch (error) {
      done(error, null);
    }
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", cfg.jwtSession),
  };
};
