import app from '../src/application'
import * as request from 'supertest';

describe('We are grateful to you for doing this it.', () => {
  it('thanks you', async (done) => {
    await request(app)
      .get('/hello')
      .timeout(5000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.greetings).toContain('Thank you');
      });
    done()
  })
});
