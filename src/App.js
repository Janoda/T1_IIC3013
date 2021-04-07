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

function App() {

    
  
  return (
    <Router>
   
      <Switch>
        <Route exact={true} path="/" component={Home}>
        </Route>
        <Route exact={true} path={`/series/:seriesname/:seasonid`} component={Season}>
        </Route>
        <Route exact={true} path={`/series/:seriesname/:seasonid/:episodeid`} component={Episode}>
        </Route>
        <Route exact={true} path={`/character/:charname`} component={Character}>
        </Route>
      </Switch>
      
      

    </Router>
  );
}


export default App;
