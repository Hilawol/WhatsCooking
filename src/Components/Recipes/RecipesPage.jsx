import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import api from '../Api/api'
import RecipesList from './RecipesList';
import CategoryCard from '../HomePage/CategoryCard'
import cusineImg from '../../Assets/Cuisine.jpeg'
import dietImg from '../../Assets/diet.jpeg'
// import ingrediantsImg from '../../Assets/ingrediants.jpeg'
import mealTypesImg from '../../Assets/mealTypes.jpeg'
const apiKey = "apiKey=8c4cf547f295464a9c0b9fe358a906ed";

function Recipes() {

  let data = [];
  const categories = [{ id: "cuisines", text: "Search by Cuisines", image: cusineImg },
  { id: "diet", text: "Search by Dietary", image: dietImg },
  { id: "mealTypes", text: "Search by Meal Type", image: mealTypesImg },];

  const [recipeList, setRecipeList] = useState(data);

  useEffect(() => {
    console.log("useEffect list:", recipeList);
  }, [recipeList]);

  const onCategoryClick = (id) => {
    console.log("RecipesPage. user chose categpry:", id);
  }

  const joinInformationArrays = (data) => {
    let recipes = [...recipeList];
    recipes = data.map(d => {
      let recipe = {};
      recipe.id = d.id;
      recipe.title = d.title;
      recipe.image = d.image;
      recipe.analyzedInstructions = d.analyzedInstructions;
      recipe.instructions = d.instructions;
      recipe.readyInMinutes = d.readyInMinutes;
      recipe.servings = d.servings;
      recipe.summary = d.summary;
      recipe.extendedIngredients = d.extendedIngredients;
      return recipe;
    });
    setRecipeList(recipes);
    console.log(recipes);
  }

  /**
   * @param {Array} ids - array of recipes id's to fetch more information. 
   */
  const fetchRecipesInformation = async (ids) => {
    // console.log(ids);
    // const url = `recipes/informationBulk?${apiKey}&ids=${ids.join(',')}`
    // const { data } = await api.get(url);
    // console.log(data);
    // joinInformationArrays(data);
  }

  /**
   * The function fetch recipes according to the term. Data returns from api inclueds:id,title and Image. 
   * @param {String} term - The terms entered by user in searchBar
   */
  const complexSearch = async (term) => {

    // console.log("recipes searchFunc:", term);
    // const url = `recipes/complexSearch?${apiKey}&number=50&query=`
    // const { data } = await api.get(url + term);
    // console.log(data.results);
    // setRecipeList(data.results);
    // fetchRecipesInformation(data.results.map(r => r.id)); 

    //For development only:

    data = [{ id: 667704, title: "Shrimp, Bacon, Avocado Pasta Salad ", image: "https://spoonacular.com/recipeImages/667704-312x231.jpg", imageType: "jpg" },
    { id: 639337, title: "Chorizo, Bacon, Mushroom and Pea Pasta", image: "https://spoonacular.com/recipeImages/639337-312x231.jpg", imageType: "jpg" },
    { id: 662649, title: "Sweet, Spicy Cherry Tomato Pasta", image: "https://spoonacular.com/recipeImages/662649-312x231.jpg", imageType: "jpg" },
    { id: 661094, title: "Spicy Eggplant Spaghetti", image: "https://spoonacular.com/recipeImages/661094-312x231.jpg", imageType: "jpg" },
    { id: 655853, title: "Pesto Zucchini Spaghetti", image: "https://spoonacular.com/recipeImages/655853-312x231.jpg", imageType: "jpg" }];
    // setRecipeList(data);
    fetchRecipesInformation(data.map(r => r.id));
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
