describe('Routes: Index', () => {
  describe('GET /', () => {
    it('returns the API status', async () => {
      const response = await request.get('/');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ status: 'NTasks API' });
    });
  });
});
