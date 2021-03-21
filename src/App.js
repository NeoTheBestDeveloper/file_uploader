import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyPhotos } from './pages/MyPhotos';

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/myphotos" component={MyPhotos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
