import React from 'react';
import '../Buttons/buttons.css';
import removeButtonImage from '../Buttons/remove.png'


class removeButton extends React.Component{
    render() {
        return (
            
            <div className="removeButton">
                <img src={removeButtonImage} alt="removeButton"/>
            </div>
                
    
            
        )
    }
}

export default removeButton;