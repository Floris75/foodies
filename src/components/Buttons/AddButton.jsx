import React from 'react';
import '../Buttons/buttons.css';
import addButtonImage from '../Buttons/add.png'


class AddButton extends React.Component{
    render() {
        return (
            
            <div className="addButton">
                <img src={addButtonImage} alt="addButton"/>
            </div>
                
                
               
            
        )
    }
}

export default AddButton;