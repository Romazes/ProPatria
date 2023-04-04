import { useState } from "react";
import styled from "styled-components";
import useScrollBlock from "../helpers/useScrollBlock";
import ButtonDonation from "./MainInfoContent/ButtonDonation";
import Logo from "./MainInfoContent/Logo";
import SocialMediaList from "./MainInfoContent/SocialMediaList";

const NavBar = styled.nav`
  font-family: "Oswald";
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #282d27;

  display: grid;
  height: 95px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  background-color: #72785c;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(95px, auto);
  }

  a {
    color: #282d27;
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  grid-column: span 1;
  z-index: 3;
`;

const MainNav = styled.div`
  grid-column: span 3;
  cursor: pointer;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    margin-top: 50px;
    height: calc(100vh - 95px - 50px);
    z-index: ${(props) => (props.clicked ? "3" : "unset")};
    order: 4;
    grid-template-rows: repeat(3, 70px) auto;
  }
`;

const NavLink = styled.div`
  float: left;
  text-align: center;
  padding: 14px 16px;

  &:hover {
    color: #f0624e;
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`;

const NavBarButton = styled.div`
  grid-column: span 1;
  z-index: 3;
`;

const MenuLabel = styled.div`
  display: none;
  z-index: 3;

  @media (max-width: 768px) {
    display: unset;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  background-color: #72785c;

  top: 30px;
  right: 40px;

  height: 2rem;
  width: 2rem;

  border-radius: 50%;

  transform: ${(props) => (props.clicked ? "scale(90)" : "scale(0)")};
  transition: transform 0.2s;

  z-index: 2;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 20px;
`;

const Header = () => {
  const [blockScroll, allowScroll] = useScrollBlock();

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      blockScroll();
    } else {
      allowScroll();
    }
  };

  return (
    <>
      <NavBar>
        <LogoContainer clicked={click}>
          <Logo />
        </LogoContainer>
        <MainNav clicked={click}>
          <NavLink>про фонд</NavLink>
          <NavLink>наші волонтери</NavLink>
          <NavLink>наш полк</NavLink>
          {click ? (
            <>
              <SocialMediaList heightIcon="32px" widthIcon="32px"/>
              <ContactContainer>
                <a href="tel:+380988888777">+38 (098) 888-87-77</a>
                <a href="mailto:office@propatria.ua">office@propatria.ua</a>
              </ContactContainer>
              <div style={{ fontSize: "18px", textAlign: "center" }}>
                © 2023 Pro Patria Charity Foundation. <br />
                All rights reserved
              </div>
            </>
          ) : (
            <></>
          )}
        </MainNav>
        <NavBarButton clicked={click}>
          <ButtonDonation />
        </NavBarButton>
        <MenuLabel onClick={handleClick}>
          <Icon clicked={click}>&nbsp;</Icon>
        </MenuLabel>
        <NavBackground clicked={click}></NavBackground>
      </NavBar>
    </>
  );
};

export default Header;
