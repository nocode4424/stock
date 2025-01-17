import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    import Home from './pages/Home';
    import Learn from './pages/Learn';
    import Simulate from './pages/Simulate';
    import MyTrades from './pages/MyTrades';
    import Media from './pages/Media';
    import './App.css';

    function App() {
      return (
        <Router>
          <div className="stars"></div>
          <div className="container">
            <nav>
              <h1>StockGenius</h1>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/learn">Learn</Link></li>
                <li><Link to="/simulate">Simulate Trading</Link></li>
                <li><Link to="/my-trades">My Trades</Link></li>
                <li><Link to="/media">Media</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/simulate" element={<Simulate />} />
              <Route path="/my-trades" element={<MyTrades />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
