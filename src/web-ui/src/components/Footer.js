import styled from "styled-components";
import ButtonDonation from "./MainInfoContent/ButtonDonation";
import Logo from "./MainInfoContent/Logo";
import SocialMediaList from "./MainInfoContent/SocialMediaList";
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants/contactInfo';

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-around;

  background-color: #72785c;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ebebeb;

  div:first-child {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding-left: 40px;

    div:first-child {
      margin-bottom: 20px;
    }
  }
`;

const ContainerNavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const NavBarTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;

  padding-bottom: 10px;
`;
const NavBarSubtitle = styled.a`
  padding-top: 10px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Logo />
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
        <ContainerNavBar>
          <NavBarTitle>наш полк</NavBarTitle>
        </ContainerNavBar>
        <ContainerNavBar>
          <ButtonDonation>підтримка</ButtonDonation>
          <SocialMediaList />
        </ContainerNavBar>
      </Container>
      <Container>
        <div>Політика конфіденційності</div>
        <div>© 2023 Pro Patria Charity Foundation. All rights reserved</div>
        <ContainerNavBar>
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </ContainerNavBar>
      </Container>
    </>
  );
};

export default Footer;
