import styled from "styled-components";
import Subtitle from "./Subtitle";
import Title from "./Title";
import SocialMediaList from "./SocialMediaList";
import PhoneLogo from "./../../images/phone.svg";
import EnvelopeLogo from "./../../images/envelope.svg";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../../constants/contactInfo";

const ContainerContacts = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f0624e;

  div:first-child {
    padding-bottom: 20px;
  }
`;

const ContainerItem = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;

  a {
    padding-left: 25px;
    text-decoration: none;
    color: #f0624e;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    width: 28px;
    height: 28px;
  }
`;

const SocialMediaContainer = styled.div`
  padding-top: 20px;
  display: flex;
  width: 100%;
`;

const ContactData = () => {
  return (
    <>
      <Title>
        Зв’язок <br />з фондом
      </Title>
      <Subtitle>виникли питання або потрібна допомога?</Subtitle>
      <ContainerContacts>
        <ContainerItem>
          <img src={PhoneLogo} alt="phone" />
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </ContainerItem>
        <ContainerItem>
          <img src={EnvelopeLogo} alt="envelope" />
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </ContainerItem>
      </ContainerContacts>
      <Subtitle>Підпишись на наші соціальні мережі</Subtitle>
      <SocialMediaContainer>
        <SocialMediaList colorSocialMediaLink="#72785C" />
      </SocialMediaContainer>
    </>
  );
};

export default ContactData;
