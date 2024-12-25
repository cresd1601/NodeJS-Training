describe('Routes: Token', () => {
  const User = app.db.models.User;

  describe('POST /token', () => {
    beforeEach(async () => {
      // Remove all current users
      await User.destroy({ where: {} });

      // Add new user for testing
      await User.create({
        name: 'John',
        email: 'johnToken@mail.net',
        password: '12345',
      });
    });

    describe('status 200', () => {
      it('returns authenticated user token', async () => {
        const response = await request.post('/token').send({
          email: 'johnToken@mail.net',
          password: '12345',
        });

        expect(response.status).toEqual(200);
        expect(response.body.hasOwnProperty('token')).toEqual(true);
      });
    });

    describe('status 401', () => {
      it('throws error when password is incorrect', async () => {
        const response = await request.post('/token').send({
          email: 'johnToken@mail.net',
          password: 'WRONG_PASSWORD',
        });

        expect(response.status).toEqual(401);
      });

      it('throws error when email not exist', async () => {
        const response = await request.post('/token').send({
          email: 'wrong@email.com',
          password: '12345',
        });

        expect(response.status).toEqual(401);
      });

      it('throws error when email and password are blank', async () => {
        const response = await request.post('/token');

        expect(response.status).toEqual(401);
      });
    });
  });
});
