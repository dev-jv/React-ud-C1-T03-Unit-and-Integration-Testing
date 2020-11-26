import React from 'react';

const PrimeraApp = ({ color = "Blue" }) => {

    return (
        <>  
            <h1> { color } </h1>
            {/* <pre>{JSON.stringify(hope, null, 3)}</pre> */}
            <p>My first App</p>  
        </>
    );
}

export default PrimeraApp;



