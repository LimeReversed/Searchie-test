import React from 'react';
import CocktailImage from '../Images/kim-daniels-p6XuDW03YjE-unsplash.jpg';

 const FrontPage = () => {
    return (
        <React.Fragment>
            <h1>Welcome to The Cocktail Explorer</h1> 
            <img src = {CocktailImage} alt = "FrontImage"></img> 
        </React.Fragment>
    )
}

export default FrontPage;