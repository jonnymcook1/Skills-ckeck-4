import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import Nav from './Components/Nav';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav/>
          {routes}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
