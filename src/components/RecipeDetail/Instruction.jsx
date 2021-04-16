import React from 'react';
import '../RecipeDetail/recipeDetail.css';

class Instruction extends React.Component{
    render(){
        return (
            <>
                <h4>Instructions</h4>
                <p> {this.props.Instructions} </p>
            </>
        )
    }
};

export default Instruction;
