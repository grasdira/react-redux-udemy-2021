// Step 1: Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2: Create a react component
const App = function(){
    return (
        <div>Hi there!</div>
    );
};

// Step 3: Take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') );