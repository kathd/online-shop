import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
