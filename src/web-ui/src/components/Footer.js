import styled from "styled-components";
import ButtonDonation from "./MainInfoContent/ButtonDonation";
import Logo from "./MainInfoContent/Logo";
import SocialMediaList from "./MainInfoContent/SocialMediaList";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../constants/contactInfo";

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;

  background-color: #72785c;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ebebeb;

  padding-left: 40px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding-left: unset;
  }
`;

const ContainerNavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding-right: unset;
  }
`;

const NavBarTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;

  padding-bottom: 10px;
`;
const NavBarSubtitle = styled.a`
  padding-top: 10px;
`;
const ContainerLogo = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: start;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ContainerLastMenuItem = styled(ContainerNavBar)`
  flex-basis: 100%;
  margin-left: 17px;
`;

const ContainerSupportAndSocialIcons = styled(ContainerNavBar)`
  align-items: center;
  gap: 25px;
`;

const ContainerAllRightReserved = styled(Container)`
  a {
    color: #282d27;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    text-align: center;
    div:nth-child(1) {
      order: 1;
    }
    div:nth-child(2) {
      order: 3;
    }
    div:nth-child(3) {
      order: 2;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerNavBar>
          <NavBarTitle>про фонд</NavBarTitle>
          <NavBarSubtitle>Документи</NavBarSubtitle>
          <NavBarSubtitle>Реєстрація</NavBarSubtitle>
          <NavBarSubtitle>Звiтність</NavBarSubtitle>
        </ContainerNavBar>
        <ContainerNavBar>
          <NavBarTitle>наглядова рада</NavBarTitle>
          <NavBarSubtitle>Засновники</NavBarSubtitle>
          <NavBarSubtitle>Наші волонтери</NavBarSubtitle>
        </ContainerNavBar>
        <ContainerLastMenuItem>
          <NavBarTitle>
            5-й штурмовий
            <br />
            полк
          </NavBarTitle>
        </ContainerLastMenuItem>
        <ContainerSupportAndSocialIcons>
          <ButtonDonation>підтримка</ButtonDonation>
          <SocialMediaList heightIcon="48px" widthIcon="48px" />
        </ContainerSupportAndSocialIcons>
      </Container>
      <ContainerAllRightReserved>
        <div>
          Політика <br /> конфіденційності
        </div>
        <div>
          © 2023 Pro Patria Charity Foundation.
          <br />
          All rights reserved
        </div>
        <ContainerNavBar>
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </ContainerNavBar>
      </ContainerAllRightReserved>
    </>
  );
};

export default Footer;
