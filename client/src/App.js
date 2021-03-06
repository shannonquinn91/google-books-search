import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Saved from "./components/Saved/Saved"
//<Route exact path="/saved" component={Saved} />

function App() {
  return (
    
    <div className="App">
      <div className="App-header">
        <Search />
        
      </div>
    </div>
    
  );
}


export default App;
