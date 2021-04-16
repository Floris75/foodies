/* eslint-disable no-useless-constructor */
import React from "react";
import axios from 'axios';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

class FavoriteComponent extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            data : [],
         };
    


    }

    async componentDidMount() {
       
          
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`);
        
        const favoriteRecipe = response.data.meals[0];

        this.setState({data : [...this.state.data, favoriteRecipe]})  
        
        
    }

    render () {


        let favoriteId = localStorage.getItem("idRecipe");
    
        if (!favoriteId){
            return (
                <div>Vous n'avez pas de recette favories</div>
            )      
        } 
        else if (favoriteId == null || undefined){
           return (
           <div>Vous n'avez pas de recette favories</div>
           )
        }
                 
        else
            return (
                <React.Fragment>
            {this.state.data === [] ? <div></div> 

                                    : <div className='randomContainer'>{this.state.data.map((recipe, index)=>
                                        
                                         <RecipeCard key={index} title ={recipe.strMeal} recipeImage= {recipe.strMealThumb} idRecipe = {recipe.idMeal}/> 
                                        )}
                                    </div>
                                                    
            }

            </React.Fragment>
            
        )
    }
}

export default FavoriteComponent;