// import React from 'react';
// import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';

// import './index.css';

// const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp />, divRoot);

//---------------------------------------- <> Test
import React from 'react';
import CounterApp from './CounterApp';
import ReactDOM from 'react-dom'
import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value = {1} />, divRoot);



