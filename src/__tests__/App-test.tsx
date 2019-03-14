import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';

describe('App', () => {

    it('contains Header component', () => {
        expect(mount(<App />).find('h1').length).toBe(1);
    })
});