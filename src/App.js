import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigate from './components/Navigate';
import Footer from './components/Footer';
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigate />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Contact" component={Contact} />
            <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
