import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import api from '../Api/api'
import RecipesList from './RecipesList';
import CategoryCard from '../HomePage/CategoryCard'
import { categories } from './utils'
const apiKey = "apiKey=8c4cf547f295464a9c0b9fe358a906ed";

function Recipes(props) {

  let data = [];

  const [recipeList, setRecipeList] = useState(data);
  const [searchState, setSearchState] = useState("collection"); //searchState="collection"/"all"
  const [foundRecipes, setFoundRecipes] = useState(true);

  useEffect(() => {
    console.log(props);
    if (props.location.searchState) {
      setSearchState(props.location.searchState);
      const recipeList = JSON.parse(sessionStorage.getItem('prevRecipeList'));
      setRecipeList(recipeList);
    }
    console.log("useEffect list:", recipeList);
    const searchReults = JSON.parse(localStorage.getItem('searchResults'));
    if (searchReults && searchReults.length > 0) {
      setRecipeList(searchReults);
    }
    console.log("useEffect searchReults:", searchReults);

  }, []);

  // useEffect(() => {
  //   localStorage.setItem('searchResults', JSON.stringify(recipeList));
  // }, [recipeList])

  const onCategoryClick = (id) => {
    console.log("RecipesPage. user chose categpry:", id);
  }

  /**
   * The function fetch recipes according to the term. Data returns from api inclueds:id,title and Image. 
   * @param {String} term - The terms entered by user in searchBar
   */
  const searchApi = async (term, type) => {
    let url;
    switch (type) {
      case "complex":
        url = `recipes/complexSearch?${apiKey}&number=5&instructionsRequired=true&addRecipeInformation=true&limitLicense=true&query=`;
        break;
      case "random":
        url = `recipes/random?${apiKey}&number=5&instructionsRequired=true&addRecipeInformation=true&limitLicense=true`;
        break;
      default:
    }

    const { data } = await api.get(url + term);

    setFoundRecipes(true);
    switch (type) {
      case "complex":
        setRecipeList(data.results);
        sessionStorage.setItem('prevRecipeList', JSON.stringify(data.results));
        break;
      case "random":
        setRecipeList(data.recipes);
        sessionStorage.setItem('prevRecipeList', JSON.stringify(data.recipes));
        break;
      default:
    }



    console.log(data);

    //For development only:
    // data = [{ id: 662649, title: "Sweet, Spicy Cherry Tomato Pasta", image: "https://spoonacular.com/recipeImages/662649-312x231.jpg", imageType: "jpg" }]
    // ,
    // { id: 639337, title: "Chorizo, Bacon, Mushroom and Pea Pasta", image: "https://spoonacular.com/recipeImages/639337-312x231.jpg", imageType: "jpg" },
    // { id: 662649, title: "Sweet, Spicy Cherry Tomato Pasta", image: "https://spoonacular.com/recipeImages/662649-312x231.jpg", imageType: "jpg" },
    // { id: 661094, title: "Spicy Eggplant Spaghetti", image: "https://spoonacular.com/recipeImages/661094-312x231.jpg", imageType: "jpg" },
    // { id: 667704, title: "Shrimp, Bacon, Avocado Pasta Salad ", image: "https://spoonacular.com/recipeImages/667704-312x231.jpg", imageType: "jpg" },
    // { id: 655853, title: "Pesto Zucchini Spaghetti", image: "https://spoonacular.com/recipeImages/655853-312x231.jpg", imageType: "jpg" }];
    // setRecipeList(data);
    // fetchRecipesInformation(data.map(r => r.id));
  }

  const toggleSearchState = (e) => {
    setSearchState(e.currentTarget.id);
    if (e.currentTarget.id === "all") {
      searchApi("", "random");
    }
  }

  const onSearchbarClick = (term) => {
    setSearchState("all");
    searchApi(term, "complex");
  }

  return (
    <div>
      <SearchBar onSearchbarClick={onSearchbarClick} />
      <div className="searchStateBtnDiv">
        <input id="collection" className={searchState === "collection" ? "searchStateBtn currentState" : "searchStateBtn"} type="button" value="Recipe Collections" onClick={toggleSearchState} />
        <input id="all" className={searchState === "all" ? "searchStateBtn currentState" : "searchStateBtn"} type="button" value="All Recipes" onClick={toggleSearchState} />
      </div>

      {searchState === "all" ?
        !foundRecipes ? <div><div className="noResultMessage">Could not find recipes</div> <RecipesList recipes={recipeList} /></div> :
          <RecipesList recipes={recipeList} />
        :
        <div className="categoryGrid">
          {categories.map(c => <CategoryCard key={c.id} id={c.id} text={c.text} image={c.image} onClick={onCategoryClick} />)}
        </div>
      }
    </div>
  )
}

export default Recipes
