import app from '../src/application'
import * as request from 'supertest';
import { db } from '../src/config/db';

describe('We are grateful to you for doing this it.', () => {
  test('thanks you', async () => {
    await request(app)
      .get('/hello')
      .timeout(5000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.greetings).toContain('Thank you');
      });
  })
  afterAll(async (done) => {
    db.sequelize.close()
    done();
  });
});
