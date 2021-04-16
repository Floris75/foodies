import React from "react";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import caflag from "./flags/ca.svg";
import cnflag from "./flags/cn.svg";
import egflag from "./flags/eg.svg";
import esflag from "./flags/es.svg";
import frflag from "./flags/fr.svg";
import gbflag from "./flags/gb.svg";
import grflag from "./flags/gr.svg";
import ieflag from "./flags/ie.svg";
import inflag from "./flags/in.svg";
import itflag from "./flags/it.svg";
import jmflag from "./flags/jm.svg";
import jpflag from "./flags/jp.svg";
import keflag from "./flags/ke.svg";
import maflag from "./flags/ma.svg";
import mxflag from "./flags/mx.svg";
import myflag from "./flags/my.svg";
import nlflag from "./flags/nl.svg";
import plflag from "./flags/pl.svg";
import ptflag from "./flags/pt.svg";
import ruflag from "./flags/ru.svg";
import thflag from "./flags/th.svg";
import tnflag from "./flags/tn.svg";
import trflag from "./flags/tr.svg";
import unflag from "./flags/un.svg";
import usflag from "./flags/us.svg";
import vnflag from "./flags/vn.svg";
import "./listing.scss"

class Listing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            responses: [],
        }
    }

    request = async (params) => {
        if (params.name !== null) {
            const {name}= params
            const responses = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
            const response = responses.data.meals[0]
            document.location.href=`/recipe/${response.idMeal}`;
        }
        else if (params.ingredient !== null) {
            const {ingredient}= params
            const responses = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);            
            const response = responses.data.meals;
            this.setState({responses: response})
        }
        else if (params.pays !== null) {
            const {pays} = params
            const responses = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?a=${pays}`);            
            const response = responses.data.meals
            this.setState({responses: response})
        }
        else if (params.categorie !== null) {
            const {categorie} = params
            const responses = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);            
            const response = responses.data.meals
            this.setState({responses: response})
        }
        else if (params.listCategorie === true) {
            const responses = await axios.get("https://themealdb.com/api/json/v1/1/list.php?c=list");            
            const response = responses.data.meals
            this.setState({responses: response})
        }
        else if (params.listPays === true) {
            const responses = await axios.get("https://themealdb.com/api/json/v1/1/list.php?a=list");            
            const response = responses.data.meals
            this.setState({responses: response})
        }
        else if (params.listName !== null) {
            const {listName} = params
            const responses = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?f=${listName}`);            
            const response = responses.data.meals
            this.setState({responses: response})
        }
    }

    componentDidMount () {
        this.request(this.props.requestParams)
    }

    research (Pays) {
        document.location.href=`/recherche/pays/${Pays}`
    }

    render () {
        return (
            <React.Fragment>
                {this.state.responses === [] || this.state.responses === undefined 
                    ? <div></div>
                    : this.props.requestParams.ingredient !== null
                        ?
                        <div className="cardContainer"> 
                            <h2>Recherche par ingrédient principal</h2>
                            <br/>
                            {this.state.responses.map((meal, index) =>
                                <RecipeCard key={index} idRecipe={meal.idMeal} title={meal.strMeal} recipeImage={meal.strMealThumb} /> 
                            )}
                        </div>
                        : this.props.requestParams.pays !== null
                            ? <div className="cardContainer"> 
                                <h2>Recherche par pays d'origine</h2>
                                <br/>
                                {this.state.responses.map((meal, index) =>
                                    <RecipeCard key={index} idRecipe={meal.idMeal} title={meal.strMeal} recipeImage={meal.strMealThumb} /> 
                            )}
                            </div>
                            : this.props.requestParams.categorie !== null
                                ? 
                                <div className="cardContainer"> 
                                    <h2>Recherche par catégorie</h2>
                                    <br/>
                                    {this.state.responses.map((meal, index) =>
                                        <RecipeCard key={index} idRecipe={meal.idMeal} title={meal.strMeal} recipeImage={meal.strMealThumb} /> 
                                )}
                                </div>
                                : this.props.requestParams.listName !== null
                                    ? <div>
                                        <h2>Recherche par première lettre</h2>
                                        <br/>
                                        <ul className="alphabet">
                                            <a href="/recherche/listName/a">
                                                <li> A /</li>
                                            </a>
                                            <a href="/recherche/listName/b">
                                                <li> B /</li>
                                            </a>
                                            <a href="/recherche/listName/c">
                                                <li> C /</li>
                                            </a>
                                            <a href="/recherche/listName/d">
                                                <li> D /</li>
                                            </a>
                                            <a href="/recherche/listName/e">
                                                <li> E /</li>
                                            </a>
                                            <a href="/recherche/listName/f">
                                                <li> F /</li>
                                            </a>
                                            <a href="/recherche/listName/g">
                                                <li> G /</li>
                                            </a>
                                            <a href="/recherche/listName/h">
                                                <li> H /</li>
                                            </a>
                                            <a href="/recherche/listName/i">
                                                <li> I /</li>
                                            </a>
                                            <a href="/recherche/listName/j">
                                                <li> J /</li>
                                            </a>
                                            <a href="/recherche/listName/k">
                                                <li> K /</li>
                                            </a>
                                            <a href="/recherche/listName/l">
                                                <li> L /</li>
                                            </a>
                                            <a href="/recherche/listName/m">
                                                <li> M /</li>
                                            </a>
                                            <a href="/recherche/listName/n">
                                                <li> N /</li>
                                            </a>
                                            <a href="/recherche/listName/o">
                                                <li> O /</li>
                                            </a>
                                            <a href="/recherche/listName/p">
                                                <li> P /</li>
                                            </a>
                                            <a href="/recherche/listName/q">
                                                <li> Q /</li>
                                            </a>
                                            <a href="/recherche/listName/r">
                                                <li> R /</li>
                                            </a>
                                            <a href="/recherche/listName/s">
                                                <li> S /</li>
                                            </a>
                                            <a href="/recherche/listName/t">
                                                <li> T /</li>
                                            </a>
                                            <a href="/recherche/listName/u">
                                                <li> U /</li>
                                            </a>
                                            <a href="/recherche/listName/v">
                                                <li> V /</li>
                                            </a>
                                            <a href="/recherche/listName/w">
                                                <li> W /</li>
                                            </a>
                                            <a href="/recherche/listName/x">
                                                <li> X /</li>
                                            </a>
                                            <a href="/recherche/listName/y">
                                                <li> Y /</li>
                                            </a>
                                            <a href="/recherche/listName/z">
                                                <li> Z</li>
                                            </a>
                                        </ul>
                                        <ul>
                                            {this.state.responses.map((meal, index) =>                                        
                                                <RecipeCard key={index} idRecipe={meal.idMeal} title={meal.strMeal} recipeImage={meal.strMealThumb} /> 
                                            )}
                                        </ul>
                                    </div>
                                    : this.props.requestParams.listCategorie !== false
                                        ?
                                        <div> 
                                            <h2>Liste des catégories de recettes</h2>
                                            <br/>
                                            <ul> 
                                                {this.state.responses.map((list, index) =>
                                                    <a href={`/recherche/categorie/${list.strCategory}`} key={index}><li> {list.strCategory} </li></a> 
                                                    )}
                                            </ul>
                                        </div>
                                        : this.props.requestParams.listPays !== false
                                            ? <ul> 
                                                <h2>Liste des pays d'origines des recettes</h2>
                                                <br/>
                                                <li>
                                                    <img src={caflag} alt="" className="flag" onClick={() => this.research("Canadian")}/>
                                                    <img src={cnflag} alt="" className="flag" onClick={() => this.research("Chinese")}/>
                                                    <img src={egflag} alt="" className="flag" onClick={() => this.research("Ecgyptian")}/>
                                                    <img src={esflag} alt="" className="flag" onClick={() => this.research("Spanish")}/>
                                                    <img src={frflag} alt="" className="flag" onClick={() => this.research("French")}/>
                                                    <img src={gbflag} alt="" className="flag" onClick={() => this.research("British")}/>
                                                    <img src={grflag} alt="" className="flag" onClick={() => this.research("Greek")}/>
                                                    <img src={ieflag} alt="" className="flag" onClick={() => this.research("Irish")}/>
                                                    <img src={inflag} alt="" className="flag" onClick={() => this.research("Indian")}/>
                                                    <img src={itflag} alt="" className="flag" onClick={() => this.research("Italian")}/>
                                                    <img src={jmflag} alt="" className="flag" onClick={() => this.research("Jamaican")}/>
                                                    <img src={jpflag} alt="" className="flag" onClick={() => this.research("Japanese")}/>
                                                    <img src={keflag} alt="" className="flag" onClick={() => this.research("Kenyan")}/>
                                                </li>
                                                <li>
                                                    <img src={maflag} alt="" className="flag" onClick={() => this.research("Moroccan")}/>
                                                    <img src={mxflag} alt="" className="flag" onClick={() => this.research("Mexican")}/>
                                                    <img src={myflag} alt="" className="flag" onClick={() => this.research("Malaysian")}/>
                                                    <img src={nlflag} alt="" className="flag" onClick={() => this.research("Dutch")}/>
                                                    <img src={plflag} alt="" className="flag" onClick={() => this.research("Polish")}/>
                                                    <img src={ptflag} alt="" className="flag" onClick={() => this.research("Portuguese")}/>
                                                    <img src={ruflag} alt="" className="flag" onClick={() => this.research("Russian")}/>
                                                    <img src={thflag} alt="" className="flag" onClick={() => this.research("Thai")}/>
                                                    <img src={tnflag} alt="" className="flag" onClick={() => this.research("Tunisian")}/>
                                                    <img src={trflag} alt="" className="flag" onClick={() => this.research("Turkish")}/>
                                                    <img src={unflag} alt="" className="flag" onClick={() => this.research("Unknown")}/>
                                                    <img src={usflag} alt="" className="flag" onClick={() => this.research("American")}/>
                                                    <img src={vnflag} alt="" className="flag" onClick={() => this.research("Vietnamese")}/>
                                                </li>
                                            </ul>
                                            : null
                }
            </React.Fragment>
        )
    }
}

export default Listing;