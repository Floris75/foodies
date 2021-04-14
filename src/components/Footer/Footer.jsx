import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
          <div className="main-Footer">
            <div className="container">
              <div className="row">
                
                <div className="col">
                  <h4>Ingrédients</h4>
                  <ul className="list-unstyled">
                    <li>Pates</li>
                    <li>Riz</li>
                    <li>Viande</li>
                    <li></li>
                  </ul>
                </div>
              
                <div className="col">
                  <h4>Cuisine du monde</h4>
                  <ul className="list-unstyled">
                    <li>France</li>
                    <li>Algérie</li>
                    <li>Maroc</li>
                    <li>Greece</li>
                  </ul>
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