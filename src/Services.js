import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { BiSolidPhotoAlbum, BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const Services = () => {
  return (
    <Wrapper>
      <div className='grid grid-two-column'>
      <div>
      <h4>"Find the link to my profiles"</h4>
      <ul>
      <li><a href="https://github.com/Dattatretya" target='_blank' rel="noreferrer" className='anchor'>Github <FaGithub/></a></li>
      <br/>
      <li><a href="https://dattatreya-space.000webhostapp.com/" target='_blank' rel="noreferrer" className='anchor'>Photography <BiSolidPhotoAlbum/></a></li>
      <br/>
      <li><a href="https://www.linkedin.com/in/dattatreya-sengupta-7627a1148" className='anchor'>LinkedIN  <BsLinkedin/></a></li>
      <br/>
      <li><a href="https://www.instagram.com/soulful_peacekeeper" target='_blank' rel="noreferrer" className='anchor'>Instagram  <BiLogoInstagramAlt/></a></li>
      <br/>
      <li><a href="https://www.facebook.com/dattatreya.sengupta.9" target='_blank' rel="noreferrer" className='anchor'>Facebook  <BsFacebook/></a></li>
      </ul>
      </div>
      <div>
        <picture>
        <img src='./images/giphy.gif' alt='check it out'/>
        </picture>
      </div>
      </div>
    
    </Wrapper>
  )
}


const Wrapper = styled.section`
  h4{
    font-size: 3rem;
    font-weight:700;
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  li{
    text-decoration: underline
  }

  .profile-links{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:${({ theme }) => theme.media.tab}) {
    .grid-two-column{
      padding: 2rem 2rem 2rem 2rem;
    }

    @media (max-width:${({ theme }) => theme.media.mobile}) {
      .grid-two-column{
        padding: 2rem 2rem 2rem 2rem;
      }

`;


export default Services