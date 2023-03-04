import Title from "./Title";
import styled from "styled-components";
import FounderImg_1 from "./../../images/founder-1.png";
import FounderImg_2 from "./../../images/founder-2.png";
import MarkerButton from "./MarkerButton";

const FounderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const FounderCardItem = styled.div`
  margin-top: 40px;
  width: 400px;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;

  img {
    max-width: 100%;
  }
`;

const FounderCardItemTitle = styled.p`
  font-size: 34px;
  line-height: 40px;

  color: #72785c;
`;

const FounderCardItemSubTitle = styled.p`
  font-size: 20px;
  line-height: 24px;

  color: #fe4543;
`;

const FounderInfo = () => {
  return (
    <>
      <Title>Засновники фонду</Title>
      <FounderContainer>
        <FounderCardItem>
          <img src={FounderImg_1} alt="Василь М'ягкий" />
          <FounderCardItemTitle>
            Василь <br /> М'ягкий
          </FounderCardItemTitle>
          <FounderCardItemSubTitle>Засновник</FounderCardItemSubTitle>
        </FounderCardItem>
        <FounderCardItem>
          <img src={FounderImg_2} alt="Віталій Войченко" />
          <FounderCardItemTitle>
            Віталій <br /> Войченко
          </FounderCardItemTitle>
          <FounderCardItemSubTitle>Засновник</FounderCardItemSubTitle>
        </FounderCardItem>
      </FounderContainer>
      <MarkerButton text="більше про волонтерів" />
    </>
  );
};

export default FounderInfo;
