import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import Nav from './Components/Nav';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        {routes}
      </div>
    </Router>
  );
}

export default App;
