import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ col, esp }) => {
        return (
            <>
                <h1>{ col }</h1>
                <p>{ esp }</p>
            </>
        );
};

FirstApp.propTypes = {
    col : PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    esp: 'Kaede',
};

export default FirstApp;
