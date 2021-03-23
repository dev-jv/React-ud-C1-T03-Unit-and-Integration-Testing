import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';
import "../setupTests"
import colors from 'colors';

describe('/> Testing in <FirstApp />'.bgBlue.white, () => {

    // ------------------------------------- <> with render...
    // test('Test 1: Should define the red color', () => {
    //     const col = 'Red';
    //     const { getByText } = render(<FirstApp col={col}/>);
    //     expect( getByText(col + '') ).toBeInTheDocument();
    //     // const wrapper = render(<FirstApp col={col}/>);
    //     // expect( wrapper.getByText(col) ).toBeInTheDocument();
    // })

    // ------------------------------------- <> with Enzyme
    test('Test 1: Should show <FirstApp/> correctly', () => {
        const col = 'Red';
        const wrapper = shallow( <FirstApp col={ col }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Test 2: Should show the species sent by props', () => {
        const col = 'Red';
        const esp = 'Miyasama Kaede';
        const wrapper = shallow(
            <FirstApp
                col={ col }
                esp={ esp }
            />
        );
        const txt = wrapper.find('p').text();
        expect(txt).toBe(esp)
    })

});
