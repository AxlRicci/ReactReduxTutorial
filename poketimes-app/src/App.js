import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// when router is used to route to a component it automatically gets special additions to props (History, Location, Match objects)
// to get props on components that are not routed. The components must be wrapped in a higher order component. To add route props, withRouter is used within the component.
