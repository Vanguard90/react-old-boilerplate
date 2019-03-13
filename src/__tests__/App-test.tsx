import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

    it('contains Header component', () => {
        expect(mount(<App />).find('h1').length).toBe(1);
    })
});