import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrOfBeer: [],
      isLiked: []
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
    if(e.target.className == "transHeart") {
      e.target.className = "heart"
    } else if (e.target.className == "heart") {
      e.target.className = "transHeart"
    } else {
      e.target.className = "transHeart"
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
           <ol className="orderedList">{this.state.arrOfBeer.map((beer, index) => {
              return(
                <BeerCard key={index} name={beer.name} image_url={beer.image_url} tagline={beer.tagline} first_brewed={beer.first_brewed} 
                description={beer.description} abv={beer.abv} ibu={beer.ibu} ebc={beer.ebc} srm={beer.srm} ph={beer.ph} attenuation_level={beer.attenuation_level}
                food_pairing={beer.food_pairing} handleLike={this.handleLike}/>
              )
           })}
           </ol>
        </header>
      </div>
    );
  }
}

export default App;
