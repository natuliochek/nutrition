import { useState } from "react";

function MyRecipesComponent ({label, calories, image, ingredients, dishType, digest}) {

    // const[showNutrition, setShowNutrition] = useState(false);

    // const handleShowNutrition = ()=> {
    //     setShowNutrition(!handleShowNutrition)
    // }
    
    return(
        <div className="recipe_box">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="ingr">
                <h5>{dishType}</h5>
            </div>
            <div className="container">
                <img src={image} alt="dish" width="300px" />
            </div>
            <div className="container">
                <h3>{calories.toFixed()} calories</h3>
            </div>
            <ul className="cont_ingr">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><span>{ingredient}</span></li>
                ))}
            </ul>

            <div className="ingr">
                <h5>Nutritional value ⬇</h5>
                {/* <button onClick={handleShowNutrition}>open</button> */}
            </div>
            {/* <div className={showNutrition ? 'active' : 'default'}> */}
            
            <div className="container">
                <ul className="table-box">
                    {digest.map((item, index) => (
                    <li className="table" key={index}>{item.label}</li>
                ))}
                </ul>
                <ul className="table-box">
                {digest.map((item, index) => (
                    <li className="table" key={index}>{item.total.toFixed(2)}</li>
                ))}
                </ul>
                <ul className="table-box">
                {digest.map((item, index) => (
                    <li className="table" key={index}>{item.unit}</li>
                ))}
                </ul>
            </div>
            
            {/* </div> */}
        </div>
    )
}

export default MyRecipesComponent;