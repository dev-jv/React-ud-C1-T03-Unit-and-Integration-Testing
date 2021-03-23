import colors from 'colors';

describe('/> Tests in demo.test.js'.bgBlue.white, () => {

    test ( 'Test 0: The strings must be the same', () => {
        const message = 'Hope'; // 1. initialization
        const message2 = `Hope`; // 2. incentive
        expect( message ).toBe( message2 ); // 3. Observing behavior
    });

});
