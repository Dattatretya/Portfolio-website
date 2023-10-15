import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';


const About = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(()=>{
    updateAboutPage();
  },[])


  const data = {
    
    intro: "Skills: Python, Django Framework (Python), HTML, CSS, JS, React.JS, SQL, Data Structure and Algorithm, Linux and Shell Scripting, Git and Github",
    
  };

  return (
    <div>
      <HeroSection {... data}/>
    </div>
  )
}

export default About