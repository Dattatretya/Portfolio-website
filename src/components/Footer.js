import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h4>Get in touch with me</h4>
          </div>
          <div className='contact-short-btn'>
            <NavLink to='/Resume'>
              <Button>ABOUT ME</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className='contaner grid grid-three-column'>
          <div className='footer-about'>
            <h3>Portfolio de Dattatreya</h3>
            <p>Enthusiastic about Web Development and Anything related to CODE.</p>
          </div>
          <div className='footer-social'>
            <h3>Profile Links:</h3>
            <div className='footer-social--icons'>
          <a href="https://github.com/Dattatretya" target='_blank' rel="noreferrer" className='anchor'
          style={{color: 'white'}}
          ><FaGithubSquare/></a>
    
          <a href="https://www.linkedin.com/in/dattatreya-sengupta-7627a1148" target='_blank' rel="noreferrer" className='anchor'
          style={{color: 'white'}}
          ><FaLinkedin/></a>
          </div>
          </div>

          <div className='footer-contact'>
            <h3>Phone:</h3>
            <p><span className='phone'>+918787412803</span></p>
          </div>
        </div>

        <div className='footer-bottom--section'>
          <hr/>
          <div className='container grid grid-two-column'>
            <p>
              @{new Date().getFullYear()} Portfolio de Dattatreya.
            </p>
          <div>
            <p>----PERSONAL CONTENT----</p>
          </div>
          </div>
        </div>

      </footer>


    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    border-radius: 1rem;
    background-color: ${({theme})=> theme.colors.bg};
    box-shadow: ${({theme})=> theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child{
      justify-self: end;
      align-self: center;
    }    
  }

  .profile-links{
    display: flex;
    margin-left: 3rem;
    
  }

  .phone{
    font-weight: 600;

  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  h4{
    font-size:1.5rem;
  }

    footer{
      padding: 14rem 0 9rem 0;
      background-color: ${({theme})=> theme.colors.footer_bg};
    }

    h3{
      color: ${({theme})=>theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p{
      color: ${({theme})=> theme.colors.white};
    }

    footer {
      padding: 14rem 0 9rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
  
      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-social--icons {
        display: flex;
        gap: 2rem;
  
        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.white};
  
          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
  
      .footer-bottom--section {
        padding-top: 9rem;
  
        hr {
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
      }
    }
  
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .contact-short {
        max-width: 95vw;
        padding: 2rem 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
  
        .contact-short-btn {
          text-align: center;
          justify-self: flex-start;
        }
      }
  
      footer .footer-bottom--section {
        padding-top: 3.2rem;
      }
    }

  

`;

export default Footer