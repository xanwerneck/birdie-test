import app from '../src/application'
import * as request from 'supertest';

describe('I need to make sure the endpoint event is providing data in the right way.', () => {
  it('only 10 rows', async () => {
    await request(app)
      .get('/event/0')
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows.length).toEqual(10)
      });
  })
  it('no rows - number is greater than the number of events', async () => {
    await request(app)
      .get('/event/500000')
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows).toEqual([])
      });
  })
  it('negative page', async () => {
    await request(app)
      .get('/event/-1')
      .expect(400)
  })
});
