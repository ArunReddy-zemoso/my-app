import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Body from './components/organisms/Body';
import Footer from './components/organisms/Footer';
import Library from './components/pages/Library'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="App-body">
      <Body ></Body>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
