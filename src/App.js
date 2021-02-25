import logo from './logo.svg';
import './App.css';
import Bpm from './Bpm'
import GenresContainer from './GenresContainer'
import { Component } from 'react';

class App extends Component {
  state = {
    selectedGenres: [], 
    bpm: ""
  }

  handleBpm = (newBpm) => {
    this.setState({
      bpm: newBpm
    }, () => {console.log(this.state)})
  }

  handleGenreSelection = (newGenre) => {
    this.setState((prevState) => {
      if (prevState.selectedGenres.length === 5) {
        return prevState
      } else {
        return {selectedGenres: [...prevState.selectedGenres, newGenre.id]}
      }
    })
  }


  render() {
    return(
      <div className="App">
        <Bpm handleBpm={this.handleBpm} bpm={this.state.bpm}/>
        <GenresContainer handleGenreSelection={this.handleGenreSelection} selectedGenres={this.state.selectedGenres} />
      </div>
    )
  }

}

export default App;
