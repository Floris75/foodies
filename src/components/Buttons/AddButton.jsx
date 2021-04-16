import React from 'react';
import './buttons.scss';
import addButtonImage from '../Buttons/add.png'


class AddButton extends React.Component{
    
    addFavorite (id) {
        const storage = localStorage.getItem("idRecipe");
        if (!storage) {
            localStorage.setItem("idRecipe", id)
            document.location.reload()
        }
        else {
            localStorage.removeItem("idRecipe")
            localStorage.setItem("idRecipe", [storage.split(", "), id].join(","))
            document.location.reload()
        }
    }

    render() {
        console.log(this.props.onClick)
        return (          
            <button onClick={() => this.addFavorite(this.props.idRecipe)} className="addButton">
                <img src={addButtonImage} alt="addButton"/>
            </button> 
        )
    }
}

export default AddButton;