import React from "react";
import axios from 'axios';
import RecipeCard from '../../components/RecipeCard/RecipeCard';


class FavoriteComponent extends React.Component {
    constructor (props){ 
         super(props)
         this.state = {
         data : [],
    };
}

   async componentDidMount() {
    const monlocalStorage = localStorage.getItem("idRecipe")
        if (!monlocalStorage) {
            return
        }
        else {
            const storage = localStorage.getItem("idRecipe").split(",").map((str) =>
            parseInt(str.trim()))
            storage.map((idRecipe)=> 
           { const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`);
          
            const FavoriteRecipe = response.data.meals[0];
            this.setState({ data : [...this.state.data, FavoriteRecipe]});
        })
          
           
        }
      
   }
    

    render() {

        let FavoriteId = localStorage.getItem("idRecipe");
        if (FavoriteId){
            return(
                <div>Vous n'avez pas de recette favoris</div>
            )
        }
else if (FavoriteId == null || undefined){
    return (
        <div>Vous n'avez pas de recette favoris</div>
    )

}
else{ 
    return(
       <React.Fragment>
       { this.state.data.map((meal,index)=>
       <RecipeCard key={index} idRecipe={meal.idMeal} title={meal.strMeal} recipeImage={meal.strMealThumb}  />
       )}   
       </React.Fragment> 
    )

    }
}}
