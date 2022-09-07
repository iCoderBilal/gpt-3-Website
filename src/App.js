import React from "react";
import './App.css';
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";
import Blog from './containers/blog/Blog';
import Features from "./containers/features/Feature";
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibilty from './containers/possibility/Possibility';
import Whatgpt3 from './containers/WhatGPT-3/Whatgpt3';

function App() {
  return (
   <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <Whatgpt3/>
    <Features/>
    <Possibilty/>
    <Cta/>
    <Blog/>
    <Footer/>
   </div>


  );
}

export default App;
