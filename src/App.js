import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
