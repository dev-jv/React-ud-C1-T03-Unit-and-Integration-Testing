import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ color }) => {

    // if ( !color ) {
    //     throw new Error( 'El color no existe!' )
    // }

    return (
        <>  
            <h1> { color } </h1>
            {/* <pre>{JSON.stringify(hope, null, 3)}</pre> */}
            <p>My first App</p>  
        </>
    );
}

PrimeraApp.propTypes = {
    color : PropTypes.string.isRequired,
}

export default PrimeraApp;



