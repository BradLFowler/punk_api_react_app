import React from 'react'
import TransHeart from './transparentheart.png'

export default function BeerCard(props) {

    return (
    <li  className="listItems">
        <img className="beerImg" src={props.image_url} />
        <h3>Name:{props.name}
            <span>First Brewed:{props.first_brewed}
                <h4>Tagline:{props.tagline}</h4>
            </span>
        </h3>
        <p>
        <span>ABV:{props.abv} </span>
        Description: {props.description}
        </p>
        <button className="likeButton" onClick={props.handleLike}>
            <img className="transHeart" src={TransHeart} />
        </button>
    </li>
    )
}
