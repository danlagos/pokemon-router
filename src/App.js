import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post}/>
          </Router>
        </div>
    );
  }
}

export default App;
