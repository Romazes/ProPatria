import styled from "styled-components";
import Subtitle from "./Subtitle";
import Title from "./Title";
import BinocularsImg from "./../../images/binoculars.svg";
import BulletproofCarImg from "./../../images/bulletproof_car.svg";
import BulletproofVestImg from "./../../images/bulletproof_vest.svg";
import PillImg from "./../../images/pill.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;

  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-align: right;
  text-transform: uppercase;
  font-size: 30px;
  color: #72785c;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 150px;
  row-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerItemCard = styled.div`
  display: grid;
  grid-template-areas:
    "amountText image"
    "titleText image";
  align-items: center;
  justify-self: end;
`;

const CardAmountText = styled.div`
  grid-area: amountText;
  color: #fe4543;
  font-size: 48px;
`;
const CardTitleText = styled.div`
  grid-area: titleText;
`;
const CardImage = styled.img`
  margin-left: 50px;
  grid-area: image;
  height: 54px;
  width: 54px;
  justify-self: end;
`;

const Article = styled.p`
  margin-top: 80px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  text-transform: none;
  color: #5b604a;

  @media (max-width: 768px) {
    font-size: 37px;
    line-height: 38px;
  }
`;

const AboutProjects = () => {
  const projectList = [
    { tittle: "Бронемобілів", amount: 5, pathImg: `${BulletproofCarImg}` },
    { tittle: "Бронежелетів", amount: 10, pathImg: `${BulletproofVestImg}` },
    { tittle: "Прилади нб", amount: 20, pathImg: `${BinocularsImg}` },
    {
      tittle: "Медикаментів",
      amount: "10.000",
      pathImg: `${PillImg}`,
    },
  ];

  const OurProjects = projectList.map((i) => (
    <ContainerItemCard>
      <CardAmountText>{i.amount}</CardAmountText>
      <CardTitleText>{i.tittle}</CardTitleText>
      <CardImage src={i.pathImg} alt={i.tittle} />
    </ContainerItemCard>
  ));

  return (
    <>
      <Title>
        наші <br /> проєкти
      </Title>
      <Subtitle>чим ми вже допомогли</Subtitle>
      <Container>
        <CardContainer>{OurProjects}</CardContainer>
        <Article>
          Завдяки вам це ще не кінець! <br /> Ми разом кожен день допомогаємо
          нашим війсковим та постраждалим. <br /> Будь-хто може зробити свій
          внесок у майбутнє нашої України 💪
        </Article>
      </Container>
    </>
  );
};

export default AboutProjects;
