import React from 'react'
import styled from 'styled-components'
import { BsFillBriefcaseFill, BsFillPhoneFill} from "react-icons/bs";
import { BiLogoGmail, BiLogoWhatsappSquare} from "react-icons/bi";
import { GrPersonalComputer, GrCertificate, GrUserManager } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { MdSummarize, MdQuiz, MdMonochromePhotos, MdOutlineQuiz, MdOutlineInterests} from "react-icons/md"; 
import { FiArrowRight } from "react-icons/fi";

const Resume = () => {

  return (
    <Wrapper>
    <div className='container'>
    <hr/>
    <hr/>
      <div className='sub-container'>
        <h2>Name: Dattatreya Sengupta  <GrUserManager/></h2>
        <div className='flexbox'>
        <p> e-mail: dattatreyasengupta.work@gmail.com <BiLogoGmail/></p>
        <p>Phone: (+91) 8787412803 <BsFillPhoneFill/> <BiLogoWhatsappSquare/></p>
        </div>
      </div>
      <hr/>
      <div className='sub-container'>
      <h2>Summary: <MdSummarize/></h2>
      <p>As a dedicated software engineer and a network engineer by profession, I am excited to embark on my professional journey in the field of Softwares with a passion for creating user friendly website and solving problems. I have gained a strong foundation in HTML, CSS, JavaScript and Python due to my keen interest in the field.
As a quick learner and effective communicator, I thrive in collaborative environments and am eager to contribute to innovative projects.
      </p>
      <br/>
      <p>
      Overall, I am an enthusiastic and driven individual seeking an opportunity to apply my skills and contribute to the success of a dynamic organization as a fresher in this field. I am ready to take on new challenges, grow my skill set, and make a meaningful impact in the field of Softwares.
      </p>
      </div>
      <hr/>
      <div className='sub-container'>
      <h2>Work Experience: <BsFillBriefcaseFill/></h2>
      <div className='flexbox'>
      <h4>Project: Cisco TAC</h4>
      <h4>Company: Capgemini</h4>
      <h4>Experince: 20 Sept 2022-Present.</h4>
      </div>

      </div>
      <hr/>
      <div className='sub-container'>
        <h2>Projects: <GrPersonalComputer/></h2>
        <ul className='flexbox'>
          <li><FiArrowRight/><a href='/' target='_blank'>Portfolio Website</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya/Speech-to-text' target='_blank'>Speech to text using React speech-recognition</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya/Python-TextToSpeech' target='_blank'>Text to Speech website using python</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya/TicTacToeReact' target='_blank'>Tic tac Toe Game using React</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya/Face-Recognition' target='_blank'>Face Recognition app using Python</a></li>
          <li><FiArrowRight/><a href='https://dattatreya-space.000webhostapp.com/' target='_blank'>Photography website using HTML, CSS.</a></li>
        </ul>
      </div>
      <hr/>
      <div className='sub-container'>
        <h2>Courses and Certificates: <GrCertificate/></h2>
        <ul className='flexbox'>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/19Unzs31_6geH3xkzFBvbaPxN0HvWQ0OR/view?usp=drive_link' target='_blank'>React Basics (Coursera Course by Meta)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1WyrwSOPNXTHvTSW4h2ps8sdjpX0rPunV/view?usp=drive_link' target='_blank'>Django Application Development with SQL and Databases (Coursera course by IBM)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1wR6Q98ROR7e0o2c0Vnl-3XHLCqgIHD9m/view?usp=drive_link' target='_blank'>Introduction to Cloud Computing (Coursera course by IBM)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1uHtOZWudF9XBkxgd1_Cn8dMZh6jCq2o7/view?usp=drive_link' target='_blank'>Crash Course on Python (Coursera course by Google)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1n6M1zhWkroVRw6Nq99UIDnVeYTjGJkC9/view?usp=drive_link' target='_blank'>Python Data Structures (Coursera course by Michigan University)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/117E_fCplcf-tYua3YDmZ8R7BIDdAm9PO/view?usp=drive_link' target='_blank'>JavaScript Basics (Coursera course by UC Davis)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/17G6_uK4sv9u340Tp6ZzpdtSNiMyQCQbH/view?usp=drive_link' target='_blank'>Hands on Introduction to Linux and Shell Scripting (Coursera course by IBM)</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/11_EqnYqlxgMT0uz2DdBWDhyabO2gX5an/view?usp=drive_link' target='_blank'>Getting started with Git and GitHub (Coursera course by IBM)</a></li>
        </ul>
      </div>
      <hr/>
      <div className='sub-container'>
        <h2>Education: <PiStudentFill/> </h2>
        <ul className='flexbox'>
          <li><PiStudentFill/><a href='https://drive.google.com/file/d/1pYF5RLl7mnJ-RmcuFLb-Af9GF3dkQxur/view?usp=drive_link' target='_blank'><span>Bachelor of Technology in Production Engineering
            <br/>
            from NIT Agartala (CGPA- 8.73)
            </span></a></li>
            <li><PiStudentFill/><a href='#'><span><a href='https://drive.google.com/file/d/1cb-FLITHmWEIfrwl728R0OSrM6xkIIao/view?usp=drive_link' target='_blank'>Indian School Certificate (ISC) </a> and <a href='https://drive.google.com/file/d/15APNNVvlwMBvPGWkVsY8GC535awQMzhJ/view?usp=drive_link' target='_blank'>Indian Certificate for Secondary Education (ICSE)</a>
              <br/>
              from Holy Cross School, Agartala
              </span></a></li>
        </ul>
      </div>
      <hr/>
      <div className='sub-container'>
        <h2>IT Skills: <GiSkills/></h2>
        <ul className='flexbox'>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>Python</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>Django Framework (basics)</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>HTML, CSS, JS</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>React.JS</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>SQL</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>Data Structure and Algorithm</a></li>
          <li><FiArrowRight/><a href='https://github.com/Dattatretya?tab=repositories' target='_blank'>Git and Github</a></li>
        </ul>
      </div>
      <hr/>
      <div className='sub-container'>
        <h2>Interests: <MdOutlineInterests/></h2>
        <ul className='flexbox'>
          <h4>Quizzing<MdOutlineQuiz/></h4>
          <ul className='flexbox'>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1W2JMnkfYhfWWLS-o3otNb825FNmuoz40/view?usp=drive_link' target='_blank'>Rank 4 in  Online Quizzzing Festval-6</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1ObAEcdQFe5WqhBgcYPRzWMwTrdTqfckj/view?usp=drive_link' target='_blank'>Rank 25 in  Online Quizzzing Festval-5</a></li>
          <li><FiArrowRight/><a href='https://drive.google.com/file/d/1dsc_5VirpnEWanGEFxqRv9I-REdh8hCy/view?usp=drive_link' target='_blank'>Winner of Inquizzitive 14, 15, 16</a></li>
        </ul>
          <h4><a href='https://dattatreya-space.000webhostapp.com/'>Photography <MdMonochromePhotos/></a></h4>
        </ul>
      </div>
      <hr/>
      <hr/>

    </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`


*{
  font-family: 'Times New Roman', Times, serif;
}

.container{
  padding: 1rem 1rem 1rem 1rem;
}

.sub-container{
  margin-top: 1rem; 
  margin-bottom: 1rem;
}

.flexbox{
  display: flex;
  flex-direction: column;
  align-items: stretch;

}


h2{

}


li{
  font-weight:500;
  font-size:1.3rem;
}

h4{
  font-weight:400;
  font-size:2rem;
  text-decoration: underline;
}

`


export default Resume