import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Snacks from "./pages/Snacks";
import Contact from "./pages/Contact";
import MainHeader from "./components/MainHeader";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";
import Order2 from "./pages/Order2";

function App() {
  return (
    <div>
      <MainHeader />
      <div className="container">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
          <Route path="/order2">
            <Order2 />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/movie-detail/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/snacks">
            <Snacks />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
