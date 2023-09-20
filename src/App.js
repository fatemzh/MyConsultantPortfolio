import React from 'react'
import Header from '../src/Component/Head/Header'
import Home from "../src/Component/Hero/Home"
import Features from "../src/Component/Features/Features"
import Portfolio from "../src/Component/Portfolio/Portfolio"
import Resume from "../src/Component/Resume/Resume"
import Blog from "../src/Component/Blog/Blog"
import Contact from "../src/Component/Contact/Contact"
import Footer from "../src/Component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
