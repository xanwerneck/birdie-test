import app from '../src/application'
import * as request from 'supertest';

type TypeEvent = {
  care_recipient_id : string
}

describe('I need to make sure the endpoint event is providing data in the right way.', () => {
  it('only 10 rows', () => {
    return request(app)
      .get('/event/0')
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows.length).toEqual(10)
      });
  })
  it('no rows - number is greater than the number of events', () => {
    return request(app)
      .get('/event/500000')
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows).toEqual([])
      });
  })
  it('negative page', () => {
    return request(app)
      .get('/event/-1')
      .expect(400)
  })
  it('no events for invalid id', () => {
    return request(app)
      .get('/event/XXX$$$$/0')
      .expect(200)
      .expect(function(res) {
        expect(res.body.count).toBe(0)
      })
  })
  it('event is for a family', () => {
    return request(app)
      .get('/event/ad3512a6-91b1-4d7d-a005-6f8764dd0111/0')
      .expect(200)
      .expect(function(res) {
        expect(res.body.rows.length).toBeGreaterThan(0)
        res.body.rows.map((row : TypeEvent) => expect(row.care_recipient_id).toBe('ad3512a6-91b1-4d7d-a005-6f8764dd0111'))
      })
  })
});
