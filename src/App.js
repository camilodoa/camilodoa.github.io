import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Work from './pages/work.js';
import Projects from './pages/projects.js';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/work'>
            <Work/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
