import React, { useState } from 'react';
import RecipesList from '../Recipes/RecipesList';
import ErrMsg from '../Recipes/ErrMsg';
import { ERROR_MSG } from '../Recipes/utils';
import api from '../Api/api';

function FavoritesPage() {


  const [recipes, setrecipes] = useState([]);
  const [errMsg, setErrorMsg] = useState(null);

  useState(() => {

    const searchApi = async (url) => {
      console.log("fetch data collection");
      // setLoading(true);
      setErrorMsg(null);
      try {
        const { data } = await api.get(url);
        return data;
      } catch (err) {
        setErrorMsg(ERROR_MSG.apiErr);
      }
      finally {
        // setLoading(false);
      }
    }

    const recipes = JSON.parse(localStorage.getItem('favoritRecipes'));
    if (recipes && recipes.length > 0) {
      // const url = `/recipes/informationBulk?ids=${recipes.join(',')}`;
      // const data = searchApi();
      // debugger
      setrecipes(recipes);
    }
    else {
      setErrorMsg("You do not have any favorite recipes yet.");
    }
  }, [])

  return (
    <div>
      {errMsg ? <ErrMsg msg={errMsg} /> : <RecipesList recipes={recipes} />}
    </div>
  )
}

export default FavoritesPage
