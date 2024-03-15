import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

