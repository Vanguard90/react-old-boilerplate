import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
// import randomBeersResponseMock from './mocks/randomBeersResponseMock.json';

const randomBeersResponseMock = require('./mocks/randomBeersResponseMock.json'); // Workaround for above JSON importing problem 

describe('App', () => {

    it('contains a single h1', () => {
        expect(mount(<App />).find('h1').length).toBe(1);
    })

    it('contains correct Title', () => {
        const app = shallow(<App />); // We don't need to render child components!
        app.setState({ allBeers: randomBeersResponseMock.results, favouriteBeers: randomBeersResponseMock.results });
        expect(app.find('h1').html()).toMatch('PunkAPI Beer Service');
    })
});