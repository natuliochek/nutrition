import { useState } from "react";

function MyRecipesComponent ({label, calories, image, ingredients, digest}) {

    const[showNutrition, setShowNutrition] = useState('default');

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
                    {showNutrition ? "Nutritional value ⬇" : "Close table ⬆"}
                    </button>
            </div>
            
            <div className="container">
                <ul className={showNutrition ? 'default' : 'active'}>
                    {digest.map((item, index) => (
                    <li className="table" key={index}>
                        <span>{item.label}</span> - 
                        <span> {item.total.toFixed(2)}</span>
                        <span> {item.unit}</span></li>
                ))}
                </ul>
            </div>
            
        </div>
    )
}

export default MyRecipesComponent;