import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Heart from './heart.png';
import TransHeart from './transparentheart.png'

import BeerCard from './BeerCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrOfBeer: [],
      isLiked: false
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const arrOfBeer = res.data
      this.setState({ arrOfBeer })
    })
  }

  handleLike = (e) => {
     if(this.state.isLiked) {
      e.target.src = Heart
      this.setState({isLiked: false})
     } else {
      e.target.src = TransHeart
      this.setState({isLiked: true})
     }
     console.log(this.state.isLiked)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
           <ol className="orderedList">{this.state.arrOfBeer.map((beer, index) => {
              return(
                <BeerCard key={index} name={beer.name} image_url={beer.image_url} tagline={beer.tagline} first_brewed={beer.first_brewed} description={beer.description} abv={beer.abv} handleLike={this.handleLike}/>
              )
           })}
           </ol>
        </header>
      </div>
    );
  }
}

export default App;
