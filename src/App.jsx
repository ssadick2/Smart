/* eslint-disable no-unused-vars */
import React from "react";
import { Hero, Navbar, Companies, Programs, Achievement, Categories, Feedback, CTA, Footer } from "./components";
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Programs/>
      <Achievement/>
      <Categories/>
      <Feedback/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App;