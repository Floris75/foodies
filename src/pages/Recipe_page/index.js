import React from "react";
import axios from "axios";
import {Instruction, Illustration, IngredientList} from "../../components/RecipeDetail";


class RecipeDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response:[],
        }
    }

    async componentDidMount () {
        const id = this.props.match.params.id;
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        this.setState({
            response: response.data.meals[0]
        })
    }

    render () {
        return (
            <div>
                <h2>{this.state.response.strMeal}</h2>
                <Illustration image={this.state.response.strMealThumb} video={this.state.response.strYoutube}/>
                <IngredientList data={this.state.response} />
                <Instruction Instructions={this.state.response.strInstructions}/>
            </div>
        )
    }
}

export default RecipeDetail;