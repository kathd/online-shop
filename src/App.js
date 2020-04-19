import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import NewShop from './views/NewShop';
import Likes from './views/Likes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={NewShop} />
        <Route path="/likes" component={Likes} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
