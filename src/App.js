import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Components/HomePage/HomePage';
import Recipes from './Components/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/recipes" exact component={Recipes} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
