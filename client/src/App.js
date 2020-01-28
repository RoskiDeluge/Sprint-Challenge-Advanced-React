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
        <div className="players-list">
          <Navbar />
          {this.state.players &&
            this.state.players.map(play => {
              return <div data-testid="player-rendering" className="player">{play.name}</div>;
            })}
        </div>
      </div>
    );
  }
}

export default App;
