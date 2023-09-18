import React from 'react';
import Project from './pages/Project';
import Education from './pages/Education'
import About from './pages/About'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ScrollToTop from "react-scroll-to-top";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import {Element} from 'react-scroll'
function App() {

  return (
    <>
        <ToastContainer/>
  <Header/>
 
  <div>
<Element name="Home">
    <Home/>
   </Element>
<Element name="About">
<About/>
   </Element>
 
<Element name="Education">
    <Education/>
   </Element>
<Element name="Skills">
    <Skills/>
   </Element>
<Element name="Projects"><Project/></Element>

<Element name="Experience">
    <Experience/>
   </Element>

<Element name="Contact">
    <Contact/>
   </Element>

  </div>
    <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />

        <Footer/>

     </>
  
  )
}

export default App
