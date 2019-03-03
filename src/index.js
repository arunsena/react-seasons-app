import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
    if(month > 2 && month <9){
        return lat >0 ? 'summer': 'winter';
    }
    else{
        return lat >0 ? 'winter': 'summer';
    }
};

class App extends React.Component{
    state = {
        season:''
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    season: getSeason(position.coords.latitude, (new Date().getMonth()+1))
                });
            }
        )
    }

    render(){
        return (
            <div className="ui container">
                <h1 class="ui header">{this.state.season}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));