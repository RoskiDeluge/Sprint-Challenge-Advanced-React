import React from "react";
import "./index.css";

class App extends React.Component {
  state = {
    players: [],
    error: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/players")
      .then(res => res.json())
      .then(player => {
        console.log("fetch: players: ", player);
        this.setState({ ...this.state, players: player });
      })
      .catch(err => console.log("error on fetch: ", err));
  };

  // handleDogTextChange = e => {
  //   this.setState({ ...this.state, doggoText: e.target.value });
  // };

  // handleDogFetch = e => {
  //   e.preventDefault();
  //   fetch(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
  //     .then(res => res.json())
  //     .then(dogData => {
  //       console.log("handleDogFetch: dogData: ", dogData);
  //       if (dogData.status !== "error") {
  //         this.setState({ ...this.state, doggos: dogData.message });
  //       }
  //     })
  //     .catch(err => console.log("fethc in handleDogFetch error: err:", err));
  // };

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <div className="doggos">
          {this.state.players &&
            this.state.players.map(player => {
              return <p>{player.name}</p>;
            })}
        </div>
      </div>
    );
  }
}

export default App;
