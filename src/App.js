import React, { useState } from 'react';

import './App.css';
import SideBar from './components/layout/sidebar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import TrendingMovies from './components/pages/movies/TrendingMovies';
import TrendingNews from './components/pages/news/TrendingNews';
import Movies from './components/pages/movies/Movies';
import PopularMovies from './components/pages/movies/PopularMovies';
import News from './components/pages/news/News';
import PopularNews from './components/pages/news/PopularNews';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Footer from './components/layout/footer/Footer';

function App() {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => setsidebar(!sidebar);
  return (
    <Router>
      <SideBar sidebar={sidebar} showSidebar={showSidebar} />
      <div className={sidebar ? 'test' : 'test1'}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/trending" component={TrendingMovies} />
          <Route exact path="/movies/popular" component={PopularMovies} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news/trending" component={TrendingNews} />
          <Route exact path="/news/popular" component={PopularNews} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
