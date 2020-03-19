import React from 'src/node_modules/react';
import { Switch, Route } from 'src/node_modules/react-router-dom';

import Navbar from 'src/components/Navbar';
import Home from 'src/views/Home';
import Shop from 'src/views/Shop';
import Cart from 'src/views/Cart';

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
