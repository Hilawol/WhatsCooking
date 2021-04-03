import React, { useState } from 'react'
import SearchBar from './SearchBar'
import api from '../Api/api'
import RecipesList from './RecipesList';
const apiKey = "apiKey=8c4cf547f295464a9c0b9fe358a906ed";

function Recipes() {

  const [recipeList, setRecipeList] = useState([]);

  const complexSearch = async (term) => {

    // console.log("recipes searchFunc:", term);
    // const url = `recipes/complexSearch?${apiKey}&number=50&query=`
    // const { data } = await api.get(url + term);
    // console.log(data.results);
    // setRecipeList(data.results);

    //For development only:
    const data = [{ id: 667704, title: "Shrimp, Bacon, Avocado Pasta Salad ", image: "https://spoonacular.com/recipeImages/667704-312x231.jpg", imageType: "jpg" },
    { id: 639337, title: "Chorizo, Bacon, Mushroom and Pea Pasta", image: "https://spoonacular.com/recipeImages/639337-312x231.jpg", imageType: "jpg" },
    { id: 662649, title: "Sweet, Spicy Cherry Tomato Pasta", image: "https://spoonacular.com/recipeImages/662649-312x231.jpg", imageType: "jpg" },
    { id: 661094, title: "Spicy Eggplant Spaghetti", image: "https://spoonacular.com/recipeImages/661094-312x231.jpg", imageType: "jpg" },
    { id: 655853, title: "Pesto Zucchini Spaghetti", image: "https://spoonacular.com/recipeImages/655853-312x231.jpg", imageType: "jpg" }];
    setRecipeList(data);
  }

  return (
    <div>
      <SearchBar searchFunc={complexSearch} />
      <RecipesList recipes={recipeList} />
    </div>
  )
}

export default Recipes
