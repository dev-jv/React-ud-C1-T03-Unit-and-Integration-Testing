import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe definir el color', () => {
        const color = 'Red';
        const { getByText } = render(<PrimeraApp color={color}/>);
        expect( getByText(color) ).toBeInTheDocument();
        // const wrapper = render(<PrimeraApp color={color}/>);
        // expect( wrapper.getByText(color) ).toBeInTheDocument();
    })
});



