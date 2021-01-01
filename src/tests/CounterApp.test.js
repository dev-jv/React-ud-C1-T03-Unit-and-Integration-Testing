import React from "react";
import '@testing-library/jest-dom/extend-expect'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';
import '../setupTests'

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor pasado', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value }/>);
        const num = wrapper.find('h2').text().trim();
        expect(parseInt(num)).toBe(100);
    });

    test('Debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const txt = wrapper.find('h2').text().trim();
        expect(txt).toBe('1')
    });

    test('Debe reducir con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const txt = wrapper.find('h2').text().trim();
        console.log(txt);
        expect(txt).toBe('-1');
    });
});



