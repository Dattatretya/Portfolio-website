import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context';


const HeroSection = ({intro}) => {
  
  const {name, image} = useGlobalContext();
  
  
  return (
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>{intro}</p>
                <Button className='btn hireme-btn'>
                <NavLink to='/contact'>Hire Me</NavLink>
                </Button>
            
            </div>
            
            <div className='section-hero-image'>
                <picture>
                    <img src={image} alt="hero" className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}




.hero-heading {
  text-transform: uppercase;
  font-size: 6.4rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 70%;
  max-height: 80%;
  height: 300px;
  width: 300px;
  border-radius: 30px
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
`;

export default HeroSection;