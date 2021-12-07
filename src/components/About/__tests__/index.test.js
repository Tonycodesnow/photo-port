import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // render About
        expect(asFragment()).toMatchSnapshot();
    })

})

afterEach(cleanup);
