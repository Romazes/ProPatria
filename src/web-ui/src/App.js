import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import backgroundImg from "./images/background-img.png";
import backgroundHero from "./images/hero-flag.png";

const MainImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      114.08% 114.08% at 50% 14.36%,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%
    );
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: calc(100vh - 95px); // 95px - height of header block
  object-fit: cover;

  @media (max-width: 768px) {
    object-position: 30% 70%;
  }
`;

const BackgroundWarrior = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  object-fit: cover;

  @media (max-height: 1200px) {
    object-position: 50% 35%;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  line-height: 100%;
  font-family: "Oswald";
  font-weight: 500;
  font-size: 160px;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: white;
`;

const Letter = styled.span`
  position: relative;
  z-index: ${(props) => (props.isActive ? "1" : "0")};
`;

function App() {
  const [phrase, setPhrase] = useState([
    { letter: "В", isActive: false },
    { letter: "о", isActive: false },
    { letter: "р", isActive: false },
    { letter: "о", isActive: false },
    { letter: "г", isActive: false },
    { letter: "", isActive: false },
    { letter: "П", isActive: false },
    { letter: "і", isActive: false },
    { letter: "д", isActive: false },
    { letter: "е", isActive: false },
    { letter: "", isActive: false },
    { letter: "Г", isActive: false },
    { letter: "е", isActive: false },
    { letter: "т", isActive: false },
    { letter: "ь", isActive: false },
    { letter: "!", isActive: false },
  ]);

  let switcher = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      switch (switcher) {
        case 0:
          phrase[0].isActive = !phrase[0].isActive;
          phrase[3].isActive = !phrase[3].isActive;
          phrase[6].isActive = !phrase[6].isActive;
          break;
        case 1:
          phrase[2].isActive = !phrase[2].isActive;
          phrase[8].isActive = !phrase[8].isActive;
          phrase[11].isActive = !phrase[11].isActive;
          phrase[13].isActive = !phrase[13].isActive;
          break;
        case 2:
          phrase[4].isActive = !phrase[4].isActive;
          phrase[7].isActive = !phrase[7].isActive;
          phrase[14].isActive = !phrase[14].isActive;
          phrase[15].isActive = !phrase[15].isActive;
          break;
        case 3:
          phrase[1].isActive = !phrase[1].isActive;
          phrase[9].isActive = !phrase[9].isActive;
          phrase[12].isActive = !phrase[12].isActive;
          break;
        case 4:
          phrase[6].isActive = !phrase[6].isActive;
          phrase[7].isActive = !phrase[7].isActive;
          phrase[8].isActive = !phrase[8].isActive;
          phrase[9].isActive = !phrase[9].isActive;
          break;
        case 5:
          phrase.map((x) => (x.isActive = false));
          break;
      }

      switcher = switcher <= 5 ? switcher + 1 : 0;
      setPhrase([...phrase]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <MainImageContainer>
        <BackgroundImage src={backgroundImg} alt="Background image" />
        <BackgroundText>
          {phrase.map((x) => (
            <Letter isActive={x.isActive}>{x.letter ? x.letter : " "}</Letter>
          ))}
        </BackgroundText>
        <BackgroundWarrior
          src={backgroundHero}
          alt="Warrior with Flag of Ukraine"
        />
      </MainImageContainer>
      <div style={{ height: "1000px" }}>Next content</div>
    </div>
  );
}

export default App;
