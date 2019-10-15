// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
    it('default state', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText("Unlocked"));
        expect(getByText("Open"));
        expect(getByText("Lock Gate"));
        expect(getByText("Close Gate"));
    })

    it('has buttons that change state of component', () => {
        const { getByText, queryByText } = render(<Dashboard />);
        const closeButton = queryByText("Close Gate");
        fireEvent.click(closeButton);
        expect(getByText("Unlocked"));
        expect(getByText("Closed"));
        expect(getByText("Lock Gate"));
        expect(getByText("Open Gate"));

        const lockButton = queryByText("Lock Gate");
        fireEvent.click(lockButton);
        expect(getByText("Locked"));
        expect(getByText("Closed"));
        expect(getByText("Unlock Gate"));
        expect(getByText("Open Gate"));

        const unlockButton = queryByText("Unlock Gate");
        fireEvent.click(unlockButton);
        expect(getByText('Unlocked'));
        expect(getByText('Closed'));
        //expect(getByText('Locked Gate'));
        expect(getByText('Open Gate'));

        const openButton = queryByText('Open Gate');
        fireEvent.click(openButton);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
        expect(getByText('Lock Gate'));
        expect(getByText('Close Gate'));
    })
});