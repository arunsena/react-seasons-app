import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <div class="ui container">
                <p class="ui header">Hello World!</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));