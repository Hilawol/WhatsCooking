import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/HomePage/Header';
import HomePage from './Components/HomePage/HomePage';
import RecipesPage from './Components/Recipes/RecipesPage';
import Recipe from './Components/Recipes/Recipe'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/recipes/:id" exact component={Recipe} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
