import styled from "styled-components";
import ArrowImg from "./../../images/arrow-right.svg";

const Marker = styled.div`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 100%;

  display: flex;
  margin-left: auto;

  color: #282d27;
  width: 390px;
  background-color: #72785c;
  cursor: pointer;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 299px;
    font-size: 35px;
  }

  div {
    display: flex;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const MarkerButton = ({ text }) => {
  return (
    <Marker>
      <div>{text}</div>
      <div>
        <img src={ArrowImg} alt="arrow-right-svg" />
      </div>
    </Marker>
  );
};

export default MarkerButton;
