import React from "react";

class NavBar extends React.Component {
    render () {
        return (
            <nav>
                <h2>FOODIES</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href=""><li>Recette</li></a>
                    <a href=""><li>Catégorie</li></a>
                    <a href=""><li>Favoris</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
            </nav>
        )
    }
}

export default NavBar;