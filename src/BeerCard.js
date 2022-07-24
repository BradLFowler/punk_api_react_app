import React from 'react'

export default function BeerCard(props) {

    return (
    <li className="listItems">
        <img className="beerImg" src={props.image_url} />
        <h3 className="beerName">Name: {props.name}
            <h4>First Brewed: {props.first_brewed}</h4>
            <h4>Tagline: {props.tagline}</h4>
        </h3>
        <p className="beerDescript">
        Description: {props.description}
        </p>
        <ul className="foodPairing">Good with:{props.food_pairing.map((food, index) => {
            return <li key={index}>{food}</li>
        })}
        </ul>
        <ul className="moreInfo">
            <li>abv: {props.abv}</li>
            <li>ibu: {props.ibu}</li>
            <li>ebc: {props.ebc}</li>
            <li>srm: {props.srm}</li>
            <li>ph: {props.ph}</li>
            <li>attenuation level: {props.attenuation_level}</li>
        </ul>
        <button className="transHeart" onClick={props.handleLike}></button>
    </li>
    )
}
