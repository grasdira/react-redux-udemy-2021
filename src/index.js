// Step 1: Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'click!';
}

// Step 2: Create a react component
const App = function(){
    const buttonText = ['Hi', 'There'];

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: '#f99', color: '#666' }}> { buttonText } </button>
        </div>
    );
};

// Step 3: Take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') );