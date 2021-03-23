import React from "react";
import '@testing-library/jest-dom/extend-expect'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
import '../setupTests'
import colors from 'colors';

describe('/> Testing in <CounterApp />'.bgBlue.white, () => {

    let wrapper = shallow(<CounterApp />); // Declared for all tests, wrapper can be modified as tests progress
    // It is initialized so as not to lose the intellisense
    beforeEach( () => {
        wrapper = shallow(<CounterApp />); // The same wrapper for each test
    });

    test('Test 1: Should show <CounterApp /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Test 2: Should show the past value', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value }/>);
        const num = wrapper.find('h2').text().trim();
        expect(parseInt(num)).toBe(100);
    });

    test('Test 3: Should increment with the +1 button', () => {
        wrapper.find('button').at(0).simulate('click'); // simulate(click, {...});
        const txt = wrapper.find('h2').text().trim();
        expect(txt).toBe('1')
    });

    test('Test 4: Should decrement with the -1 button', () => {
        wrapper.find('button').at(2).simulate('click');
        const txt = wrapper.find('h2').text().trim();
        // console.log(txt);
        expect(txt).toBe('-1');
    });

    test('Test 5: Should set the default value with the reset btn', () => {
        const value = 0;
        const wrapper = shallow(<CounterApp value={ value }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const res = wrapper.find('h2').text().trim();
        // console.log(res);
        expect(res).toBe('0')
    })

});
