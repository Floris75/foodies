import React from "react";

class ListingComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props);
        return (
            <div></div>
        )
    }
}

export default ListingComponent;