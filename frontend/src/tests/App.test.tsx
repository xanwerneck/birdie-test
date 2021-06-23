import { act, fireEvent, screen } from '@testing-library/react';
import { render } from 'react-dom';

import App from '../App';

var dtCurrent = new Date()

var event = {
    id : "xxxx",
    event_type : "type_test",
    visit_id : "0000",
    caregiver_id : "1111",
    care_recipient_id : "2222",
    timestamp : (dtCurrent).toISOString()
}

describe('integration tests consuming api services', () => {

})

