import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/HomePage/Header';
import HomePage from './Components/HomePage/HomePage';
import RecipesPage from './Components/Recipes/RecipesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/recipes" exact component={RecipesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
