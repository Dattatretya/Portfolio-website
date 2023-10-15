import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'

import Contact from './Contact'
import Services from './Services'


const Home = () => {


  const { updateHomePage } = useGlobalContext ()

  useEffect (()=>{
    updateHomePage();
  }, []);

  const data = {
    intro: "A dedicated software engineer and a network engineer by profession, I also do quizzing from time to time.",
  }


  return (
    <div>
      <HeroSection {...data}/>
      <Contact/>
    </div>
  )
}

export default Home