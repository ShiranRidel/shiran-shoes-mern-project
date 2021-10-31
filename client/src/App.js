import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Footermui from './components/footer/Footermui';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <DataProvider>

      <Router>
        <div className="App">
        <ScrollToTop/>

          <Header />
          <MainPages  />

        </div>

      </Router>
     <Footermui/>
    </DataProvider>
  );
}

export default App;
