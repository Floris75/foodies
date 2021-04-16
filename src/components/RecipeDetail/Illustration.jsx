import React from 'react';
import '../RecipeDetail/recipeDetail.css';
import ReactPlayer from "react-player";

class Illustration extends React.Component{
    render(){
        return (
            <div className="illustration">
                <img src={this.props.image} alt="imgRecette"/>
                <ReactPlayer url={this.props.video} />
            </div> 
        )
    }
};

export default Illustration;