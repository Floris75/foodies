import React from "react";

class NavBar extends React.Component {
    render () {
        return (
            <nav>
                <h2>FOODIES</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/recherche/listName/a"><li>Recette</li></a>
                    <a href="/recherche/listCategorie"><li>Catégorie</li></a>
                    <a href="/favoris"><li>Favoris</li></a>
                    <a href="#footer"><li>Contact</li></a>
                </ul>
            </nav>
        )
    }
}

export default NavBar;