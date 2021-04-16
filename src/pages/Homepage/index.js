import React from "react";
import axios from 'axios';
import RecipeCard from '../../components/RecipeCard/RecipeCard';



class Homepage extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
        data : [],
     };

    }

    async componentDidMount() {
        for (let i=0; i < 9; i++ ) {
          
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        
            const randomRecipe = response.data.meals[0];

            this.setState({data : [...this.state.data, randomRecipe]})  
        }
        
    }
    

    render () {
        console.log(this.state.data);
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

export default Homepage;