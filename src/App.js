import './App.scss';
import React from 'react'
import { HomePage } from './homepage.component.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <HomePage />
    );
  }
  }


export default App;
