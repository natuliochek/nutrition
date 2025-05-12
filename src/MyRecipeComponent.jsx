import { useState } from "react";

function MyRecipesComponent ({label, calories, image, ingredients, digest}) {

    const[showNutrition, setShowNutrition] = useState(false);

    const handleShowNutrition = ()=> {
        setShowNutrition(!showNutrition)
    }
    
    return(
        <div className="recipe_box">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="dish" width="300px" />
            </div>
            <div className="container">
                <h3>{calories.toFixed()} calories</h3>
            </div>
            <ul className="header">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><span>{ingredient}</span></li>
                ))}
            </ul>
            <div className="container">
                <button onClick={handleShowNutrition}>
                    {showNutrition ? "Close table ⬆" : "Nutritional value ⬇"}
                    </button>
            </div>
            {showNutrition && <div className="container">
                <ul>
                {digest.map((item, index) => (
                    <li className="table"  key={index}>
                        <span>{item.label}</span> - 
                        <span>{item.total.toFixed(2)}</span>
                        <span>{item.unit}</span> 
                    </li>
                ))}
                </ul>
            </div>}
        </div>
    )
}

export default MyRecipesComponent;