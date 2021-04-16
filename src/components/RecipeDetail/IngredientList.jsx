import React from "react";

class IngredientList extends React.Component {

    render () {
        const data = this.props.data;
        return (
            <div>
                <h4>Liste des ingrédients</h4>
                <ul>
                    {data.strIngredient1 === "" 
                        ? null
                        : <li>{data.strIngredient1} : {data.strMeasure1}</li>
                    }
                    {data.strIngredient2 === "" 
                        ? null
                        : <li>{data.strIngredient2} : {data.strMeasure2}</li>
                    }
                    {data.strIngredient3 === "" 
                        ? null
                        : <li>{data.strIngredient3} : {data.strMeasure3}</li>
                    }
                    {data.strIngredient4 === "" 
                        ? null
                        : <li>{data.strIngredient4} : {data.strMeasure4}</li>
                    }
                    {data.strIngredient5 === "" 
                        ? null
                        : <li>{data.strIngredient5} : {data.strMeasure5}</li>
                    }
                    {data.strIngredient6 === "" 
                        ? null
                        : <li>{data.strIngredient6} : {data.strMeasure6}</li>
                    }
                    {data.strIngredient7 === "" 
                        ? null
                        : <li>{data.strIngredient7} : {data.strMeasure7}</li>
                    }
                    {data.strIngredient8 === "" 
                        ? null
                        : <li>{data.strIngredient8} : {data.strMeasure8}</li>
                    }
                    {data.strIngredient9 === "" 
                        ? null
                        : <li>{data.strIngredient9} : {data.strMeasure9}</li>
                    }
                    {data.strIngredient10 === "" 
                        ? null
                        : <li>{data.strIngredient10} : {data.strMeasure10}</li>
                    }
                    {data.strIngredient11 === "" 
                        ? null
                        : <li>{data.strIngredient11} : {data.strMeasure11}</li>
                    }
                    {data.strIngredient12 === "" 
                        ? null
                        : <li>{data.strIngredient12} : {data.strMeasure12}</li>
                    }
                    {data.strIngredient13 === "" 
                        ? null
                        : <li>{data.strIngredient13} : {data.strMeasure13}</li>
                    }
                    {data.strIngredient14 === "" 
                        ? null
                        : <li>{data.strIngredient14} : {data.strMeasure14}</li>
                    }
                    {data.strIngredient15 === "" 
                        ? null
                        : <li>{data.strIngredient15} : {data.strMeasure15}</li>
                    }
                    {data.strIngredient16 === "" 
                        ? null
                        : <li>{data.strIngredient16} : {data.strMeasure16}</li>
                    }
                    {data.strIngredient17 === "" 
                        ? null
                        : <li>{data.strIngredient17} : {data.strMeasure17}</li>
                    }
                    {data.strIngredient18 === "" 
                        ? null
                        : <li>{data.strIngredient18} : {data.strMeasure18}</li>
                    }
                    {data.strIngredient19 === "" 
                        ? null
                        : <li>{data.strIngredient19} : {data.strMeasure19}</li>
                    }
                    {data.strIngredient20 === "" 
                        ? null
                        : <li>{data.strIngredient20} : {data.strMeasure20}</li>
                    }
                </ul>
            </div>
        
        )
    }
}

export default IngredientList;