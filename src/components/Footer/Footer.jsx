import React from 'react';
import './Footer.scss';
import axios from "axios";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          listPays: [],
          listIngredient: [],
        }
    }
    
    async componentDidMount () {
      const listsPays = await axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list");            
      const listPays = listsPays.data.meals
      this.setState({listPays})
      const listIngredients = await axios.get("https://themealdb.com/api/json/v1/1/list.php?i=list");            
      const listIngredient = listIngredients.data.meals
      this.setState({listIngredient})
    }

    render() {
        return (
          <div className="main-Footer">
            <div className="container">
              <div className="row">
                
                <div className="col">
                  <h4>Ingrédients</h4>
                    {this.state.listIngredient[0] === undefined
                      ? 
                      null
                      :
                      <ul className="list-unstyled">
                        <a href={`/recherche/ingredient/${this.state.listIngredient[0].strIngredient}`}>
                          <li>{this.state.listIngredient[0].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[1].strIngredient}`}>
                          <li>{this.state.listIngredient[1].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[2].strIngredient}`}>
                          <li>{this.state.listIngredient[2].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[3].strIngredient}`}>
                          <li>{this.state.listIngredient[3].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[4].strIngredient}`}>
                          <li>{this.state.listIngredient[4].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[5].strIngredient}`}>
                          <li>{this.state.listIngredient[5].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[6].strIngredient}`}>
                          <li>{this.state.listIngredient[6].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[7].strIngredient}`}>
                          <li>{this.state.listIngredient[7].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[8].strIngredient}`}>
                          <li>{this.state.listIngredient[8].strIngredient}</li>
                        </a>
                        <a href={`/recherche/ingredient/${this.state.listIngredient[9].strIngredient}`}>
                          <li>{this.state.listIngredient[9].strIngredient}</li>
                        </a>
                      </ul> 
                    }
                </div>
              
                <div className="col">
                  <h4>Cuisine du monde</h4>
                  {this.state.listPays[0] === undefined
                      ? 
                      null
                      :
                      <ul className="list-unstyled">
                        <a href={`/recherche/pays/${this.state.listPays[0].strArea}`}>
                          <li>{this.state.listPays[0].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[1].strArea}`}>
                          <li>{this.state.listPays[1].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[2].strArea}`}>
                          <li>{this.state.listPays[2].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[3].strArea}`}>
                          <li>{this.state.listPays[3].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[4].strArea}`}>
                          <li>{this.state.listPays[4].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[5].strArea}`}>
                          <li>{this.state.listPays[5].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[6].strArea}`}>
                          <li>{this.state.listPays[6].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[7].strArea}`}>
                          <li>{this.state.listPays[7].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[8].strArea}`}>
                          <li>{this.state.listPays[8].strArea}</li>
                        </a>
                        <a href={`/recherche/pays/${this.state.listPays[9].strArea}`}>
                          <li>{this.state.listPays[9].strArea}</li>
                        </a>
                      </ul> 
                    }
                </div>
                
                <div className="col">
                  <h4>Foodies</h4>
                  <ul className="list-unstyled">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>History</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="row">
                <p className="col-sm">
                 @ | All rights reserved |
                 
                </p>
              </div>
            </div>
          </div>
        );
      }
    }
      export default Footer;