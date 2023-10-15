import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
        <img src='./images/error404.webp' alt='error'/>
        <NavLink to='/'>
        <Button>Go Back</Button>
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        margin: 3rem 3rem 3rem 3rem;
        border-radius: 3rem;
        max-width: 40%
    }

`;

export default Error