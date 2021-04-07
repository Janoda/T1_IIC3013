import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Season from './components/season'
import Home from './components/home'
import Episode from './components/episode'
import Character from './components/character'
import Search from './components/search'

function App() {

    
  
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-input">
              <form class="form-inline" action="/search" method="get">
                <input class="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn-primary"  type="submit">Search</button>
              </form>
              </li>

            </ul>
          </div>
        </nav>
   
      <Switch>
        <Route exact={true} path="/" component={Home}>
        </Route>
        <Route exact={true} path={`/series/:seriesname/:seasonid`} component={Season}>
        </Route>
        <Route exact={true} path={`/series/:seriesname/:seasonid/:episodeid`} component={Episode}>
        </Route>
        <Route exact={true} path={`/character/:charname`} component={Character}>
        </Route>
        <Route  path={`/search`} component={Search}>
        </Route>
      </Switch>
      
      

    </Router>
  );
}


export default App;
