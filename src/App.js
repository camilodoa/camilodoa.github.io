import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Trunk from './pages/trunk.js';
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
            <Trunk/>
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
