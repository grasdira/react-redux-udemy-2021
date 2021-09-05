import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    constructor(props) { //from javascript
        super(props);

        // initialize state obj
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // setState to update state obj
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define render !!
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
        
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));