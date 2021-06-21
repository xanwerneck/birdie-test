import { render, screen } from '@testing-library/react';
import { Card } from "../components/Card";

var event = {
    id : "xxxx",
    event_type : "type_test",
    visit_id : "0000",
    caregiver_id : "1111",
    care_recipient_id : "2222",
    timestamp : (new Date()).toISOString()
}

test('validate card element', () => {
  render(<Card event={event} i={0} />);
  const linkElement = screen.getByText("xxxx")
  expect(linkElement.getAttributeNames()).toEqual(["h4"])
});
