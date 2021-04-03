import React, { useState } from 'react'
import SearchBar from './SearchBar'
import api from '../Api/api'
import RecipesList from './RecipesList';
import CategoryCard from '../HomePage/CategoryCard'
import cusineImg from '../../Assets/Cuisine.jpeg'
import dietImg from '../../Assets/diet.jpeg'
import ingrediantsImg from '../../Assets/ingrediants.jpeg'
import mealTypesImg from '../../Assets/mealTypes.jpeg'
const apiKey = "apiKey=8c4cf547f295464a9c0b9fe358a906ed";

function Recipes() {

  let data = [];
  const categories = [{ id: "cuisines", text: "Search by Cuisines", image: cusineImg },
  { id: "diet", text: "Search by Dietary", image: dietImg },
  { id: "mealTypes", text: "Search by Meal Type", image: mealTypesImg },];

  const [recipeList, setRecipeList] = useState(data);

  const onCategoryClick = (id) => {
    console.log("RecipesPage. user chose categpry:", id);
  }
  const complexSearch = async (term) => {

    // console.log("recipes searchFunc:", term);
    // const url = `recipes/complexSearch?${apiKey}&number=50&query=`
    // const { data } = await api.get(url + term);
    // console.log(data.results);
    // setRecipeList(data.results);

    //For development only:

    data = [{ id: 667704, title: "Shrimp, Bacon, Avocado Pasta Salad ", image: "https://spoonacular.com/recipeImages/667704-312x231.jpg", imageType: "jpg" },
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
      <div className="categoryGrid">
        {categories.map(c => <CategoryCard key={c.id} id={c.id} text={c.text} image={c.image} onClick={onCategoryClick} />)}
      </div>
    </div>
  )
}

export default Recipes
