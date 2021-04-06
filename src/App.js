import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Season from './components/season'
import Home from './components/home'

function App() {

    
  
  return (
    <Router>
   
      <Switch>
      <Route exact={true} path="/" component={Home}>

      </Route>
      <Route path={`/series/:seriesname/:seasonid`} component={Season}>

        </Route>
      </Switch>
      
      

    </Router>
  );
}


export default App;
