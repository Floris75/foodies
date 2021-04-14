import React from 'react';
import '../RecipeDetail/recipeDetail.css';
import chickenImage from './chicken.jpg';

class Illustration extends React.Component{
    render(){
        return (
            <div className="illustration">
                <img src={chickenImage} alt="imgRecette"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bkpBk7fLAu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
};

export default Illustration;