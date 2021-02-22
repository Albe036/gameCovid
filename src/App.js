import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Soup from './components/Soup';
import Home from './components/home';
import Setting from './components/setting';
import How from './components/howplay';
import Score from './components/scores';
import { Fragment } from 'react';


function App() {

  return (
    <Router>
      <Route path="/" exact unique render={()=>{return (
        <Fragment>
          <Home/>
        </Fragment> 
          )}}>
      </Route>

      <Route path="/play" component={Soup}/>
      <Route path="/scores" component={Score}/>
      <Route path="/howplay" component={How}/>
      <Route path="/setting" component={Setting}/>
    </Router> 
  );
}

export default App;
