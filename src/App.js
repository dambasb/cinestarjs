import './App.css';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Snacks from './pages/Snacks';
import Contact from './pages/Contact';
import MainHeader from './components/MainHeader';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (

    <div>

      <MainHeader />

     
      <div className='container'>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/movie-detail/:movieId'>
          <MovieDetail />
        </Route>
        <Route path='/snacks'>
          <Snacks />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </div>

    </div>
  );
}

export default App;
