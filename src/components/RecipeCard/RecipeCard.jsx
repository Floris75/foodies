import React from 'react';
import '../RecipeCard/recipecard.css';
import AddButton from '../Buttons/AddButton'
import '../Buttons/buttons.css';

class RecipeCard extends React.Component{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            
            <div className="cards-recipe">
                {/* this.props.recipeImage = strMealsThumb */}
                <img className="recipe-image" src={this.props.recipeImage} alt="riz"/>
                {/* this.props.title = strMeal */}
                <h4>{this.props.title}</h4>
                {/* bouton à revoir pour afficher le bon bouton selon s'il a ajouté ou pas à ses favoris */}
                <AddButton/> 
                <button>Lire la recette</button>
            </div>
        )
    }
}

export default RecipeCard;