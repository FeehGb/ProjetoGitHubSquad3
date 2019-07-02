import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User'


class App extends Component {
  
  /**
   * Consome dados do usuario name: Nome do usarior data=Dados que deseja exibir do usuario
   */
  render() {
    return(
      <div>
        <User name="FeehGb" data="html_url"></User>
    </div>
    )
  }
}

export default App;
