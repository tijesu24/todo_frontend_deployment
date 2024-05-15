
import './App.css';
import React, { Component } from "react";


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Navigation } from './components/navigations';
import { Logout } from './components/logout';
import { Register } from './components/register';


class App extends Component {


  render() {
    return <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>;

  }
}

export default App;