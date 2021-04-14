import React from 'react';
import '../RecipeCard/recipecard.css';
import recipeImage from './rice.jpg'
import AddButton from '../Buttons/AddButton'
import '../Buttons/buttons.css';



class RecipeCard extends React.Component{
    render() {
        return (
            
            <div className="cards-recipe">
                
                <img className="recipe-image" src={recipeImage} alt="riz"/>
                <h4>Poireau Vinaigrette</h4>
                <AddButton/>
            
                
              
                
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos rem illo officia quis recusandae culpa deleniti modi pariatur ipsum consequuntur?</p>

                <button>Lire la recette</button>

            </div>
                
            
        )
    }
}

export default RecipeCard;