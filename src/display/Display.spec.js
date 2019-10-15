import React from 'react';
import {render, fireEvent} from 'react-testing-library';

import Display from './Display';

// Test away!

//Gate Test
describe('Display Component', () => {
    it("Shows state unlocked and open", () => {
        const { getByText } = render(<Display />);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    })

    it('Changes through props', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        expect(getByText("Locked"));
        expect(getByText("Closed"));
    })
})