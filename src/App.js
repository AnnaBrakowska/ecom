import './App.scss';
import React from 'react'
import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Header } from './components/header/header.component'
import { SigninLogin } from './pages/sign-in-login/sign-in-login.component'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SigninLogin} />
          </Switch>
        </div>
      )
    }
  }


export default App;
