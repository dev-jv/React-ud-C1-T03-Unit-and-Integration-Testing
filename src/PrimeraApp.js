import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ color = 'Yellow', especie }) => {
    
    return (
        <>  
            <h1> { color } </h1>
            <p> { especie } </p>
        </>
    );
}

PrimeraApp.propTypes = { 
    color : PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    especie: 'Kaede',
}

export default PrimeraApp;



