import React from "react";
import "./App.scss";
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    players: [],
    error: ""
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(player => {
        console.log("fetch: players: ", player);
          this.setState({ ...this.state, players: player });
      })
      .catch(err => console.log("error on fetch: ", err));
  };

  render() {
    return (
      <div className="App">
        <Navbar /> 
        <div data-testid="player-rendering" className="players-list">
          {this.state.players &&
            this.state.players.map(play => {
              return <div className="player">{play.name}</div>;
            })}
        </div>
      </div>
    );
  }
}

export default App;
