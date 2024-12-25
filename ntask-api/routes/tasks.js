module.exports = (app) => {
  const Task = app.db.models.Task;

  app
    .route('/tasks')
    .all(app.auth.authenticate())
    .get(async (req, res) => {
      try {
        const result = await Task.findAll({
          where: { UserId: req.user.id },
        });

        res.json(result);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .post(async (req, res) => {
      try {
        req.body.UserId = req.user.id;

        const result = await Task.create(req.body);

        res.json(result);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    });

  app
    .route('/tasks/:id')
    .all(app.auth.authenticate())
    .get(async (req, res) => {
      try {
        const result = await Task.findOne({
          where: { id: req.params.id },
        });

        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .put(async (req, res) => {
      try {
        await Task.update(req.body, {
          where: { id: req.params.id, UserId: req.user.id },
        });

        res.sendStatus(204);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    })
    .delete(async (req, res) => {
      try {
        await Task.destroy({
          where: { id: req.params.id, UserId: req.user.id },
        });

        res.sendStatus(204);
      } catch (error) {
        res.status(412).json({ msg: error.message });
      }
    });
};
