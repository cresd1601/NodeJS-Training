module.exports = (app) => {
  const User = app.db.models.User;

  app.post('/users', async (req, res) => {
    try {
      const result = await User.create(req.body);

      res.json(result);
    } catch (error) {
      res.status(412).json({ msg: error.message });
    }
  });

  app
    .route('/users/:id')
    .all(app.auth.authenticate())
    .get(async (req, res) => {
      try {
        const result = await User.findByPk(req.params.id, {
          attributes: ['id', 'name', 'email'],
        });

        res.json(result);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .delete(async (req, res) => {
      try {
        await User.destroy({ where: { id: req.params.id } });

        res.sendStatus(204);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    });
};
