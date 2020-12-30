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
    })
});



