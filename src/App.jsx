import { useState } from 'react'
import {NavBar} from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import { About } from "./components/About/About";
import './App.css'
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
    
    
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About/>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
