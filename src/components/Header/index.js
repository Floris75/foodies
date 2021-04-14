import React from "react";
import NavBar from "./NavBar";
import SearchContainer from "./SearchContainer";

class Header extends React.Component {
    render () {
        return (
            <header>
                <NavBar />
                <SearchContainer />
            </header>
        )
    }
}

export default Header;