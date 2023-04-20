import styled from "styled-components";
import btnLogo from "./../../images/lightning.svg";

const Button = styled.button`
  width: 240px;
  height: 49.5px;
  background-color: #72785c;
  border: 6px solid #1f231f;
  color: #ffffff;
  cursor: pointer;

  font-family: "Oswald";
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #282d27;

  &:hover {
    background-color: #1f231f;
    color: #72785c;
  }

  @media (max-width: 768px) {
    width: 165px;
    padding-right: ${(props) => (props.isLightingLogo ? "23px" : "0px")};

    border: 4px solid #1f231f;

    font-size: 20px;
  }
`;

const LightingLogo = styled.i`
  display: ${(props) => (props.isLightingLogo ? "unset" : "none")};
  position: absolute;
  background-image: url(${btnLogo});
  background-size: 36.5px;
  background-repeat: no-repeat;
  height: 64px;
  width: 37px;

  margin-top: -7.5px;
  margin-left: 8.5px;

  @media (max-width: 768px) {
    margin-left: -4px;
    margin-top: -9.5px;

    height: 66px;
    width: 37px;
  }
`;

const ButtonDonation = ({ isLightingLogo = true }) => {
  return (
    <>
      <Button isLightingLogo={isLightingLogo}>
        підтримати
        <LightingLogo isLightingLogo={isLightingLogo} />
      </Button>
    </>
  );
};

export default ButtonDonation;
