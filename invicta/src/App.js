import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/Homepage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Menu />
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
