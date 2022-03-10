import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Body from './components/organisms/Body';
import Footer from './components/organisms/Footer';
// import useStyles from './styles'

function App() {
  // const classes=useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Body ></Body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
