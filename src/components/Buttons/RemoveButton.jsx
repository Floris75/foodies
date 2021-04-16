import React from 'react';
import './buttons.scss';
import removeButtonImage from '../Buttons/remove.png'


class removeButton extends React.Component{
    removeFavorite (id) {
        const storage = localStorage.getItem("idRecipe").split(",")
        localStorage.removeItem("idRecipe")
        const newStorage = storage.filter((idRecipe) => parseInt(idRecipe.trim()) !== parseInt(id))
        localStorage.setItem("idRecipe", newStorage.join(","))
        document.location.reload()
    }
    
    render() {
        return (
            
            <button className="removeButton" onClick={() => this.removeFavorite(this.props.idRecipe)}>
                <img src={removeButtonImage} alt="removeButton"/>
            </button>
                
    
            
        )
    }
}

export default removeButton;