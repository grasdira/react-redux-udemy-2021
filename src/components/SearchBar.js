import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    // 1. 用constructor bind
    onFormSubmit = event => { // 2. arrow function 自動修正 this
        event.preventDefault(); //阻止form自己發送submit重整頁面

        // console.log(this.state.term); // error message!! //! 'this' is undefined

        this.props.onSubmit(this.state.term)

    }
    // 3. 用arrow function : onSubmit={ (event) => this.onFormSubmit(event)}

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;