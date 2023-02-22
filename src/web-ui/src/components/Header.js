import styled from "styled-components";
import logo from "./../images/pro-patria.svg";
import btnLogo from "./../images/lightning.svg";
import proPatriaText from "./../images/pro-patria-text.svg";

const NavBar = styled.nav`
  font-family: "Oswald";
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #282d27;

  height: 95px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  background-color: #72785c;
`;

const Logo = styled.div`
  grid-column: span 1;

  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const MainNav = styled.div`
  grid-column: span 3;
  cursor: pointer;
`;

const NavLink = styled.div`
  float: left;
  text-align: center;
  padding: 14px 16px;

  &:hover {
    color: #F0624E;
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`;

const NavBarButton = styled.div`
  grid-column: span 1;
`;

const Button = styled.button`
  width: 256px;
  height: 50px;
  background-color: #72785c;
  border: 6px solid #282d27;
  color: #ffffff;
  cursor: pointer;

  font-family: "Oswald";
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #282d27;

  &:hover {
    background-color: #282d27;
    color: #72785c;
  }
`;

const ButtonLogo = styled.div`
  position: absolute;
  right: 12px;
  margin-top: 7px;
  background-image: url(${btnLogo});
  background-size: 35px;
  background-repeat: no-repeat;
  height: 64px;
  width: 64px;
`;

const Header = () => {
  return (
    <div>
      <NavBar>
        <Logo>
          <img src={logo} height="64" width="64" alt="logo" />
          <img src={proPatriaText} height="64" width="64" alt="text" />
        </Logo>
        <MainNav>
          <NavLink>про фонд</NavLink>
          <NavLink>наші волонтери</NavLink>
          <NavLink>5-й окремий штурмовий полк</NavLink>
        </MainNav>
        <NavBarButton>
          <ButtonLogo />
          <Button>підтримка</Button>
        </NavBarButton>
      </NavBar>
    </div>
  );
};

export default Header;