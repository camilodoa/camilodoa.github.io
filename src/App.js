import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Work from './pages/work.js';
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
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/work'>
            <Work/>
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
