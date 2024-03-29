import React from 'react';
import Drinks from '../data/drinks.json';

 const CocktailInfoPage = (props) => {

    let cocktails = Drinks.cocktails;
    let cocktail = cocktails.filter(i => i.name === props.match.params.id);

    return (
        <div className = "CocktailInfoPageDiv">
        <h2 style = {{marginTop: '0px'}}>{cocktail[0].name}</h2>
        <p style = {{color: 'black'}}>{cocktail[0].preparation}</p>
        <img src = {cocktail[0].image} alt = "CocktailImage"></img>
        </div>
    )
}

export default CocktailInfoPage;