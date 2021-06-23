import { render, screen } from '@testing-library/react';
import { Card } from "../components/Card";

var dtCurrent = new Date()

var event = {
    id : "xxxx",
    event_type : "type_test",
    visit_id : "0000",
    caregiver_id : "1111",
    care_recipient_id : "2222",
    timestamp : (dtCurrent).toISOString()
}

test('validate card element', () => {
  render(<Card event={event} />);
  var element = screen.getByText("Type test")
  expect(element).toBeInTheDocument()
  element = screen.getByText(dtCurrent.toLocaleString())
  expect(element).toBeInTheDocument()
});
