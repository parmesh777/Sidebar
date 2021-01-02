import './App.css';
import SideBar from './components/layout/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Trending from './components/pages/movies/Trending';
import Movies from './components/pages/movies/Movies';

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/trending" component={Trending} />
      </Switch>
    </Router>
  );
}

export default App;
