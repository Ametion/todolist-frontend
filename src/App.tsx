import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {LoginComponent} from "./Components/SignComponents/Login/LoginComponent";
import {GlobalStyles} from "./GlobalStyles";
import {RegisterComponent} from "./Components/SignComponents/Register/RegisterComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent></LoginComponent>} />
          <Route path="/register" element={<RegisterComponent></RegisterComponent>} />
          <Route path="/account" element={<h1>account</h1>} />
          <Route path="/todos" element={<h1>todos</h1>} />
        </Routes>
      </Router>
      <GlobalStyles/>
    </div>
  );
}

export default App;
