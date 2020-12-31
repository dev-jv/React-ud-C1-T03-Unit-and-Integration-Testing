import React from "react";
import '@testing-library/jest-dom/extend-expect'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
import '../setupTests'

describe('Pruebas en <CounterApp />', () => {
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const value = 1;
        const wrapper = shallow(<CounterApp value={ value }/>);

        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el valor pasado', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value }/>);

        const num = wrapper.find('h2').text().trim();
        expect(parseInt(num)).toBe(100);
    });
});



