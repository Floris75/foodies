import NavBar from "./NavBar";
import SearchContainer from "./SearchContainer";
import React from "react";

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