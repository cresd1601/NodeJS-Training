const jwt = require('jwt-simple');

describe('Routes: User', () => {
  const User = app.db.models.User;
  const jwtSecret = app.libs.config.jwtSecret;

  let token;
  let fakeUser;

  beforeEach(async () => {
    await User.destroy({ where: {} });

    const user = await User.create({
      name: 'John',
      email: 'johnUsers@mail.net',
      password: '12345',
    });

    fakeUser = user;
    token = jwt.encode({ id: fakeUser.id }, jwtSecret);
  });

  describe('POST /users', () => {
    describe('status 200', () => {
      it('creates a new user', async () => {
        const response = await request.post('/users').send({
          name: 'Mary',
          email: 'mary@mail.net',
          password: '12345',
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Mary');
        expect(response.body.email).toEqual('mary@mail.net');
      });
    });
  });

  describe('GET /users/:id', () => {
    describe('status 200', () => {
      it('returns an authenticated user', async () => {
        const response = await request
          .get(`/users/${fakeUser.id}`)
          .set('Authorization', `JWT ${token}`);

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('John');
        expect(response.body.email).toEqual('johnUsers@mail.net');
      });
    });
  });

  describe('DELETE /users/:id', () => {
    describe('status 204', () => {
      it('deletes an authenticated user', async () => {
        const response = await request
          .delete(`/users/${fakeUser.id}`)
          .set('Authorization', `JWT ${token}`);

        expect(response.status).toEqual(204);
      });
    });
  });
});
