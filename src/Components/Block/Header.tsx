import React from 'react'
import styled from "styled-components"
import { CgProfile } from "react-icons/cg"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
      <div>
          <Container>
              <Main>
                  <Nav1>
                      KD-BREAD
                  </Nav1>
                  
                  <Nav2>
                      <Home>Home</Home>
                      <About>About</About>
                      <Menue>Menue</Menue>
                      <Contact>Contact</Contact>

                  </Nav2> 
                  <Nav3>
                      <Myaccount>
                          <Icon><CgProfile/></Icon>
                          My Account</Myaccount>
                      <Cart>
                          <Icon1><AiOutlineShoppingCart/></Icon1>
                          Cart</Cart>
                  </Nav3> 
              </Main>
          </Container>

    </div>
  )
}

export default Header

const Icon = styled.div`
margin-top:4px;
margin-right:5px;
`;

const Icon1 = styled.div`
margin-top:3px;
margin-right:5px;
`;

const About = styled.div`
margin-left: 40px;
align-items: center;
justify-content: center;
display: flex;
`;

const Menue = styled.div`
margin-left: 40px;
align-items: center;
justify-content: center;
display: flex;
`;

const Contact = styled.div`
margin-left: 40px;
align-items: center;
justify-content: center;
display: flex;
`;

const Myaccount = styled.div`
align-items: center;
justify-content: center;
display: flex;
`;

const Cart = styled.div`
align-items: center;
margin-left: 20px;
justify-content: center;
display: flex;
`;

const Home = styled.div`
margin-left: 40px;
align-items: center;
justify-content: center;
display: flex;

`;

const Container = styled.div`
width: 100%;
height: 70px;
background-color: rgb(219,254,249);
background: linear-gradient(90deg, rgba(219,254,249,1) 0%, 
rgba(254,255,255,1) 51%, rgba(218,205,205,1) 100%);;
justify-content: center;
align-items: center;
display: flex;
`;

const Main = styled.div`
width: 95%;
height: 65px;
/* background-color: blueviolet; */
display: flex;
justify-content: space-around;
`;

const Nav1 = styled.div`
color: orange;
font-size:20px;
font-weight:600;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px
;
`;

const Nav2 = styled.div`
display: flex;
justify-content: space-between;
`;

const Nav3 = styled.div`
display: flex;
`;
