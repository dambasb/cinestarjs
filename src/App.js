import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MainHeader from "./components/MainHeader";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";

function App() {
  return (
    <div>
      <MainHeader />
      <div className="container">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/movie-detail/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
