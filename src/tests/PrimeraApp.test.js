import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import "../setupTests"

describe('Pruebas en <PrimeraApp />', () => {

    // ------------------------------------- <> with render...
    // test('Debe definir el color red', () => {
    //     const color = 'Red';
    //     const { getByText } = render(<PrimeraApp color={color}/>);
    //     expect( getByText(color + '') ).toBeInTheDocument();
    //     // const wrapper = render(<PrimeraApp color={color}/>);
    //     // expect( wrapper.getByText(color) ).toBeInTheDocument();
    // })

    // ------------------------------------- <> with Enzyme
    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        const color = 'Red';
        const wrapper = shallow( <PrimeraApp color={ color }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar la especie enviada por props', () => {
        const color = 'Red';
        const especie = 'Miyasama Kaede';
        const wrapper = shallow(
            <PrimeraApp
                color={ color }
                especie={ especie }
            />
        );
        const txtPar = wrapper.find('p').text();
        expect(txtPar).toBe('Miyasama Kaede')
    })
});



