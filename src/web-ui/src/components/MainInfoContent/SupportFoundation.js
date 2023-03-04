import HeartImg from "./../../images/heart.svg";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 600;
  font-size: 2.2em;
  text-transform: uppercase;
  color: #72785c;

  button {
    margin-top: 30px;
  }

  padding-bottom: 100px;
`;

const ContainerTitle = styled.div`
  img:nth-child(1) {
    padding-right: 10px;
  }

  img:nth-child(2) {
    padding-left: 10px;
  }
`;

const ContainerArticle = styled.p`
  margin-top: 30px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;

  color: #72785c;
`;

const SupportFoundation = () => {
  return (
    <Container>
      <ContainerTitle>
        <img src={HeartImg} height="24" width="24" alt="heart" />
        підтримай фонд
        <img src={HeartImg} height="24" width="24" alt="heart" />
      </ContainerTitle>
      <ContainerArticle>
        натисни на кнопку нижче, щоб підтримати наших хоробрих воїнів та мирних
        громдян
      </ContainerArticle>
      <ContainerArticle>твій внесок ніколи не буде забутий</ContainerArticle>
      <Button>підтримати</Button>
    </Container>
  );
};

export default SupportFoundation;
