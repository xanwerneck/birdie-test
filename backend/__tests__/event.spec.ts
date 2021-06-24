import app from '../src/application'
import * as request from 'supertest';
import { db } from '../src/config/db';

type TypeEvent = {
  care_recipient_id : string
}

describe('I need to make sure the endpoint event is providing data in the right way.', () => {
  test('only 10 rows', async () => {
    await request(app)
      .get('/event/0')
      .timeout(10000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows.length).toEqual(10)
      });
  })
  test('no rows - number is greater than the number of events', async () => {
    await request(app)
      .get('/event/500000')
      .timeout(10000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows).toEqual([])
      });
  })
  test('negative page', async () => {
    await request(app)
      .get('/event/-1')
      .timeout(10000)
      .expect(400)
  })
  test('no events for invalid id', async () => {
    await request(app)
      .get('/event/XXX$$$$/0')
      .timeout(10000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.count).toBe(0)
      })
  })
  test('event is for a family', async () => {
    await request(app)
      .get('/event/ad3512a6-91b1-4d7d-a005-6f8764dd0111/0')
      .timeout(10000)
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows.length).toBeGreaterThan(0)
        res.body.rows.map((row : TypeEvent) => expect(row.care_recipient_id).toBe('ad3512a6-91b1-4d7d-a005-6f8764dd0111'))
      })
  })
  afterAll(async (done) => {
    db.sequelize.close()
    done();
  });
});
