import React, { useState } from "react";
import styled from "styled-components";
import {Constant} from "../Constant";
import {ButtonCustomSigIn, ButtonCustomSignUp} from "../Button";

const NavbarBtn = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
  
`;

const NavbarDesk = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #282c34;
  transition: all 0.3s ease-in;
  font-size:1.1rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fbf8f3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #000;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    background-color: #ccc3e9;
  }
\` ;
  

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
          <Nav>
              <Logo href="">
                  {Constant.fiber}
              </Logo>
              <Hamburger onClick={() => setIsOpen(!isOpen)}>
                  <span />
                  <span />
                  <span />
              </Hamburger>
              <Menu isOpen={isOpen}>
                  <MenuLink href="">{Constant.community}</MenuLink>
                  <MenuLink href="">{Constant.pricing}</MenuLink>
                  <MenuLink href="">{Constant.feature}</MenuLink>
                <NavbarDesk>
                    <MenuLink href="/login">{Constant.signIn}</MenuLink>
                    <MenuLink href="">{Constant.signUp}</MenuLink>
                </NavbarDesk>

              </Menu>
              <NavbarBtn>
                  <ButtonCustomSigIn >Sign In</ButtonCustomSigIn>
                  <ButtonCustomSignUp  sx={{
                      ':hover': {
                          bgcolor: 'primary.main', // theme.palette.primary.main
                          color: 'white',
                      },
                  }}>Sign Up</ButtonCustomSignUp>
              </NavbarBtn>
          </Nav>

  );
};

export default Navbar;

