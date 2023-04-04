import styled from "styled-components";
import { ReactComponent as FacebookLogo } from "./../../images/facebook.svg";
import { ReactComponent as TelegramLogo } from "./../../images/telegram.svg";
import { ReactComponent as InstagramLogo } from "./../../images/instagram.svg";

const SocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SocialMediaItem = styled.div`
  margin: auto;

  a {
    fill: ${(props) => props.fill || "#282d27"};
  }

  a:hover {
    fill: #f0624e;
  }

  a svg {
    height: ${(props) => props.heightIcon || "64px"};
    width: ${(props) => props.widthIcon || "64px"};
  }
`;

const SocialMediaList = ({ colorSocialMediaLink, heightIcon, widthIcon }) => {
  return (
    <SocialMediaContainer>
      <SocialMediaItem fill={colorSocialMediaLink} heightIcon={heightIcon} widthIcon={widthIcon}>
        <a href="https://www.facebook.com/5th.SAB" target="blank">
          <FacebookLogo />
        </a>
      </SocialMediaItem>
      <SocialMediaItem fill={colorSocialMediaLink} heightIcon={heightIcon} widthIcon={widthIcon}>
        <a href="#" target="blank">
          <TelegramLogo />
        </a>
      </SocialMediaItem>
      <SocialMediaItem fill={colorSocialMediaLink} heightIcon={heightIcon} widthIcon={widthIcon}>
        <a href="#" target="blank">
          <InstagramLogo />
        </a>
      </SocialMediaItem>
    </SocialMediaContainer>
  );
};

export default SocialMediaList;
