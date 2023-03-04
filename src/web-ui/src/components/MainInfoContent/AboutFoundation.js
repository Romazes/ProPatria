import styled from "styled-components";
import Title from "./Title";
import Subtitle from "./Subtitle";
import MarkerButton from "./MarkerButton";
import ProPatriaImg from "./../../images/pro-patria-img.jpg";
import WarriorProPatriaImg from "./../../images/warrior-pro-patria-img.jpg";

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

const AboutFoundation = () => {
  return (
    <>
      <Title>
        про <br />
        фонд
      </Title>
      <Subtitle>ми працюємо заради майбутнього</Subtitle>
      <Description>
        Благодійні фонди можуть відігравати важливу роль у наданні гуманітарної
        допомоги та підтримки військовослужбовців. Наші воїни, які боронять наші
        землі, часто стикаються з фізичними та емоційними викликами під час
        служби. <br />
        "Pro Patria" - може допомогти вирішувати ці проблеми різними способами.
      </Description>
      <ImageContainer>
        <img src={ProPatriaImg} alt="Pro Patria Charity Foundation" />
      </ImageContainer>
      <MarkerButton text="проєкти" />
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
      <MarkerButton text="матеріали" />
    </>
  );
};

export default AboutFoundation;
