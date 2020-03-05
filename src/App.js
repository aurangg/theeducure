import React, {Component} from 'react';
import Timer from './components/timer.jsx';
import Homepage from './Homepage/homepage.jsx';
import Filters from './Filters/filters.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Timer></Timer>
    </div>
    // <Router>
    //   <div>
    //   <ul>
    //       <li>
    //         <Link to="/homepage">Homepage</Link>
    //       </li>
    //       <li>
    //         <Link to="/Filters">Filters</Link>
    //       </li>
    //     </ul>
    //     <Switch>
    //       <Route path="/homepage"><Homepage /></Route>
    //       <Route path="/filters"> <Filters /></Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
