import { useState } from "react";
import { useEffect } from "react";
import MyRecipesComponent from "./MyRecipeComponent";
import './App.css';


function App () {
  const MY_ID = "99cc3e96";
  const MY_KEY = "c8b82c868b8b41bb5ad9ed3e15ea421c";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("apple");

  useEffect(()=> {
    const getRecipe = async ()=> {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data);
      console.log(data.hits)
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e)=> {
    setMySearch(e.target.value)
  }

  const finalSearch = (e)=> {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return(
    <div>
      <div className="header">
        <h1>Fridge descovering APP</h1>
        <h3>Let's be inspired...</h3>
        <h4>So, what do we have in the fridge?</h4> 
        
      </div>
      <form onSubmit={finalSearch} className="container">
        <input 
        onChange={myRecipeSearch} 
        value={mySearch} 
        className="search" 
        placeholder="type the products you have..."
        />
      </form>
      <div className="container">
        <button onClick={finalSearch}>to see an offer</button>
      </div>
      <div>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent 
          key={index} 
          label = {element.recipe.label} 
          calories = {element.recipe.calories} 
          image = {element.recipe.image} 
          ingredients = {element.recipe.ingredientLines} 
          dishType = {element.recipe.dishType} 
          digest = {element.recipe.digest}
          />
        ))}
      </div>
      <div className="container"></div>
    </div>
  )
}

export default App;