import styled from "styled-components";
import ArrowImg from "./../images/arrow-right.svg";
import ProPatriaImg from "./../images/pro-patria-img.jpg";
import WarriorProPatriaImg from "./../images/warrior-pro-patria-img.jpg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  background-color: #282d27;
  color: #ffffff;
  padding-top: 80px;
  padding-left: 130px;
  padding-right: 130px;

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const Title = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-transform: uppercase;
  color: #72785c;

  flex-basis: 100%;

  @media (max-width: 768px) {
    font-size: 96px;
  }
`;

const Subtitle = styled.h2`
  font-family: "Rubik";
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-transform: uppercase;

  color: #5b604a;
  padding-top: 20px;
  flex-basis: 100%;

  @media (max-width: 768px) {
    font-size: 45px;
    line-height: 57px;
  }
`;

const Description = styled.p`
  padding-top: 80px;
  font-family: "Rubik";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 40px;

  img {
    max-width: 100%;
  }
`;

const Marker = styled.div`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 90px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  display: flex;
  margin-left: auto;

  color: #282d27;
  width: 599px;
  background-color: #72785c;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 130px;

  @media (max-width: 768px) {
    width: 299px;
    font-size: 50px;
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
  }
`;

const MainContent = () => {
  return (
    <Container>
      <Title>
        про <br />
        фонд
      </Title>
      <Subtitle>ми працюємо заради майбутнього</Subtitle>
      <Description>
        Благодійні фонди можуть відігравати важливу роль у наданні гуманітарної
        допомоги та підтримки військовослужбовців. Наші воїни, які боронять наші
        землі, часто стикаються з фізичними та емоційними викликами під
        час служби. <br />
        "Pro Patria" - може допомогти вирішувати ці проблеми різними
        способами.
      </Description>
      <ImageContainer>
        <img src={ProPatriaImg} alt="Pro Patria Charity Foundation" />
      </ImageContainer>
      <Marker>
        <div>проєкти</div>
        <div>
          <img src={ArrowImg} alt="arrow-right-svg" />
        </div>
      </Marker>
      <Subtitle>ми будемо захищені як ніколи</Subtitle>
      <Description>
        5-та окрема штурмова бригада (5 ОШБр, в/ч A4010) — піхотно-штурмове
        механізоване з'єднання у складі Сухопутних військ України чисельністю в
        бригаду. Підпорядковується безпосередньо командувачу сухопутних військ.
        З'єднання оснащене переважно західними зразками озброєнь.
      </Description>
      <ImageContainer>
        <img
          src={WarriorProPatriaImg}
          alt="Warriors of Pro Patria Charity Foundation"
        />
      </ImageContainer>
      <Marker>
        <div>матеріали</div>
        <div>
          <img src={ArrowImg} alt="arrow-right-svg" />
        </div>
      </Marker>
    </Container>
  );
};

export default MainContent;
