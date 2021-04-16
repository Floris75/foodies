import React from 'react';
import '../RecipeCard/recipecard.css';
import AddButton from '../Buttons/AddButton'
import RemoveButton from '../Buttons/RemoveButton'

class RecipeCard extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            favorite: false,
        }
    }

    componentDidMount () {
        const monlocalStorage = localStorage.getItem("idRecipe")
        if (!monlocalStorage) {
            return
        }
        else {
            const storage = localStorage.getItem("idRecipe").split(",").map((str) =>
            parseInt(str.trim()))
            storage.map((idRecipe) =>
            parseInt(idRecipe) === parseInt(this.props.idRecipe) 
            ? this.setState({favorite: true}) 
            : null           
            )
        }
    }

    render() {
        return (
            <div className="cards-recipe">
                {/* this.props.recipeImage = strMealsThumb */}
                <img className="recipe-image" src={this.props.recipeImage} alt="riz"/>
                {/* this.props.title = strMeal */}
                <h4>{this.props.title}</h4>
                {this.state.favorite 
                ? <RemoveButton idRecipe={this.props.idRecipe} />
                : <AddButton idRecipe={this.props.idRecipe} />
                } 
                <button className="button" onClick={() => document.location.href=`/recipe/${this.props.idRecipe}`}>Lire la recette</button>
            </div>
        )
    }
}

export default RecipeCard;