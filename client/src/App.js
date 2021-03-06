import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Saved from "./components/Saved/Saved"

//<Route exact path="/saved" component={Saved} />
function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <Route exact path="/" component={Search} />
        
      </div>
    </div>
    </Router>
  );
}


export default App;
