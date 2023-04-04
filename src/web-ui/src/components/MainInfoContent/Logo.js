import styled from "styled-components";
import logo from "./../../images/pro-patria.svg";
import proPatriaText from "./../../images/pro-patria-text.svg";

const LogoContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  img {
    height: 64px;
    width: 64px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="logo" />
      <img src={proPatriaText} alt="text" />
    </LogoContainer>
  );
};

export default Logo;
