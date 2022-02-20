import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// functional component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
//     return <div>Latitude: </div>;
// };

// class base component
class App extends React.Component {

    // JS method : the very first function would be called
    // 方法一
    // constructor(props) { //* 非必要
    //     super(props); // make sure some function in React.Component would be called.
        
    //     // initialize state
    //     this.state = { latitude: null, errorMessage: '' };
    // }

    // 方法二 babel處理
    state = { latitude: null, errorMessage: '' };

    componentDidMount() {
        // would automatically be called one time when component first gets rendered
        // do data loading only one time
        console.log('component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        // would automatically be called when component be updated
        // do data loading when state/props changes
        console.log('component updated rerendered');
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude}/>
        }

        return <Spinner message="Please accept location request"/>;
    }

    // a required method in React *** would be called VERY frequently!! ***
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

//// ################# NOTES #################
// Geolocation API
// https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation_API
// if User denied Geolocation, pages would also show something.

// Rules of State
/*
    1. only usable with class components.  (functional components using the "hooks" system)
    2. props system vs state system.
    3. 'State' is a JS object that contains data relevant to a component.
    4. Updating State will rerender component
    5. State must be initialized when a component is created.
    6. State can only be updated using the function 'setState'. ***
*/