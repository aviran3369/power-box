import React from 'react';
import './App.scss';
import { AppProvider } from './AppContext';
import Header from './Layout/Header';
import NavBar from './Layout/NavBar';
import AppModules from './Layout/AppModules';

function App() {

  return <AppProvider>
    <div className="power-box-app">
      <Header />
      <NavBar />
      <AppModules />
    </div>
  </AppProvider>;
}

export default App;