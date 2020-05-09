import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import PhotoStream from './pages/photography';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/photos'>
                <PhotoStream/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
