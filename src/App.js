import React, { Component } from 'react';
import Header               from './Components/Header'
import Contents             from './Components/Contents'
import Footer               from './Components/Footer'
import './App.css';

class App extends Component {
  
  /**
   * Consome dados do usuario name: Nome do usarior data=Dados que deseja exibir do usuario
   */
  render() {
    return(
        <div className="app">
          <Header title="" />
          <Contents />
          <Footer />
        </div>
      )
  }
}

export default App;
