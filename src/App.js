import './App.scss';
import React from 'react'
import { HomePage } from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/SHOP' component={ShopPage} />
      </Switch>
    );
  }
  }


export default App;
