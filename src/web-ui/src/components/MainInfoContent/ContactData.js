import styled from "styled-components";
import Subtitle from "./Subtitle";
import Title from "./Title";
import PhoneLogo from "./../../images/phone.svg";
import EnvelopeLogo from "./../../images/envelope.svg";
import FacebookLogo from "./../../images/facebook.svg";
import TelegramLogo from "./../../images/telegram.svg";
import InstagramLogo from "./../../images/instagram.svg";

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

const SocialMediaItem = styled.div`
  margin: auto;

  a:hover {
    filter: invert(51%) sepia(53%) saturate(2158%) hue-rotate(328deg) brightness(95%) contrast(98%);
  }

  a img {
    width: 64px;
  }
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
          <a href="tel:+380988888777">+38 (098) 888-87-77</a>
        </ContainerItem>
        <ContainerItem>
          <img src={EnvelopeLogo} alt="envelope" />
          <a href="mailto:office@propatria.ua">office@propatria.ua</a>
        </ContainerItem>
      </ContainerContacts>
      <Subtitle>Підпишись на наші соціальні мережі</Subtitle>
      <SocialMediaContainer>
        <SocialMediaItem>
          <a href="https://www.facebook.com/5th.SAB" target="blank">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href="#" target="blank">
            <img src={TelegramLogo} alt="telegram logo" />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href="#" target="blank">
            <img src={InstagramLogo} alt="instagram logo" />
          </a>
        </SocialMediaItem>
      </SocialMediaContainer>
    </>
  );
};

export default ContactData;
