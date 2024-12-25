const jwt = require('jwt-simple');

describe('Routes: Tasks', () => {
  const User = app.db.models.User;
  const Task = app.db.models.Task;
  const jwtSecret = app.libs.config.jwtSecret;

  let token;
  let fakeTask;

  beforeEach(async () => {
    await User.destroy({ where: {} });

    const user = await User.create({
      name: 'John',
      email: 'johnTask@mail.net',
      password: '12345',
    });

    await Task.destroy({ where: {} });

    const tasks = await Task.bulkCreate([
      {
        id: 1,
        title: 'Work',
        UserId: user.id,
      },
      { id: 2, title: 'Study', UserId: user.id },
    ]);

    fakeTask = tasks[0];
    token = jwt.encode({ id: user.id }, jwtSecret);
  });

  describe('GET /tasks', () => {
    describe('status 200', () => {
      it('returns a list of tasks', async () => {
        const response = await request
          .get('/tasks')
          .set('Authorization', `JWT ${token}`);

        expect(response.status).toEqual(200);
        expect(response.body[0].title).toEqual('Work');
        expect(response.body[1].title).toEqual('Study');
      });
    });
  });

  describe('POST /tasks', () => {
    describe('status 200', () => {
      it('creates a new task', async () => {
        const response = await request
          .post('/tasks')
          .set('Authorization', `JWT ${token}`)
          .send({ title: 'Run' });

        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual('Run');
        expect(response.body.done).toEqual(false);
      });
    });
  });

  describe('GET /tasks/:id', () => {
    describe('status 200', () => {
      it('returns one task', async () => {
        const response = await request
          .get(`/tasks/${fakeTask.id}`)
          .set('Authorization', `JWT ${token}`);

        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual('Work');
      });
    });
  });

  describe('status 404', () => {
    it('throws error when task not exist', async () => {
      const response = await request
        .get(`/tasks/0`)
        .set('Authorization', `JWT ${token}`);

      expect(response.status).toEqual(404);
    });
  });

  describe('PUT /tasks/:id', () => {
    describe('status 204', () => {
      it('updates a task', async () => {
        const response = await request
          .put(`/tasks/${fakeTask.id}`)
          .set('Authorization', `JWT ${token}`)
          .send({
            title: 'Travel',
            done: true,
          });

        expect(response.status).toEqual(204);
      });
    });
  });

  describe('DELETE /tasks/:id', () => {
    describe('status 204', () => {
      it('removes a task', async () => {
        const response = await request
          .delete(`/tasks/${fakeTask.id}`)
          .set('Authorization', `JWT ${token}`);

        expect(response.status).toEqual(204);
      });
    });
  });
});
