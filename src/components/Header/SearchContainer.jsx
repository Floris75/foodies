import React from "react";
import Header from "./header.png"

class SearchContainer extends React.Component {
    render () {
        return (
            <div className="SearchContainer">
                <div>
                    <img src={Header} alt="header"/>
                    <h1>FOODIES</h1>
                    <h3>La cuisine exquise</h3>
                    <form action="/recherche/listName/a">
                        <input type="search" name="recherche" placeholder="Rechercher"/>
                        <button>Recherche</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchContainer;