import React from "react";
import Listing from "./listing";

class ListingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            pays: null,
            ingredient: null,
            categorie: null,
            listCategorie: false,
            listPays: false,
            listName: null,
        }
    }

    research (params) {
        this.setState({...params})
    }

    componentDidMount () {
        if (this.props.recherche === "listPays") {
            this.research({listPays: true})
        }
        else if (this.props.recherche === "listCategorie") {
            this.research({listCategorie: true})
        }
        else {
            this.research(this.props.match.params)
        }
    }
    

    render () {
        return (
            <React.Fragment>
                {this.state.name === null && this.state.pays === null && this.state.ingredient === null && this.state.categorie === null && this.state.listCategorie === false && this.state.listPays === false && this.state.listName === null
                ? <div></div> 
                : <Listing requestParams={this.state} />
                }
            </React.Fragment>
        )
    }
}

export default ListingComponent;