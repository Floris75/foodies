import React from "react";
import header from "./images/header.png"

class SearchContainer extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    
    render () {
        return (
            <div className="SearchContainer">
                <div>
                    <img src={header} alt=""/>
                    <h1>FOODIES</h1>
                    <h3>La cuisine exquise</h3>
                    <form action="/">
                        <input type="search" name="recherche" placeholder="Recherche" />
                        <button>Rechercher</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchContainer;