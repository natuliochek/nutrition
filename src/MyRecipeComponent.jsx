function MyRecipesComponent ({label, calories, image, ingredients, dishType, digest}) {
    return(
        <div className="recipe_box">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
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
            <div className="container">
                <ul>
                {digest.map(item => (
                    <li>{item.Fat}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MyRecipesComponent;