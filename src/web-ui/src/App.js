import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import backgroundImg from "./images/background-img.jpg";
import backgroundHero from "./images/hero-flag.png";

const MainBackgroundImage = styled.div`
  position: relative;
  background-image: url(${backgroundImg});
  height: calc(100vh - 95px);
  min-height: calc(100vh - 95px);
  max-height: calc(100vh - 95px);
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundWarrior = styled.div`
  background: radial-gradient(
    114.08% 114.08% at 50% 14.36%,
    rgba(0, 0, 0, 0) 0%,
    #000000 100%
  );
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BackgroundText = styled.div`
  font-family: "Oswald";
  font-weight: 500;
  font-size: 200px;
  line-height: 100%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
  position: ${(props) => (props.isActive ? "inherit" : "unset")};
`;

const WarriorImg = styled.img`
  position: absolute;
  height: 888px;
`;

WarriorImg.defaultProps = {
  src: backgroundHero,
};

function App() {
  const [phrase, setPhrase] = useState([
    { letter: "В", isActive: false },
    { letter: "о", isActive: false },
    { letter: "р", isActive: false },
    { letter: "о", isActive: false },
    { letter: "г", isActive: false },
    { letter: "П", isActive: false },
    { letter: "і", isActive: false },
    { letter: "д", isActive: false },
    { letter: "е", isActive: false },
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
          phrase[5].isActive = !phrase[5].isActive;
          break;
        case 1:
          phrase[2].isActive = !phrase[2].isActive;
          phrase[7].isActive = !phrase[7].isActive;
          phrase[9].isActive = !phrase[9].isActive;
          phrase[11].isActive = !phrase[11].isActive;
          break;
        case 2:
          phrase[4].isActive = !phrase[4].isActive;
          phrase[6].isActive = !phrase[6].isActive;
          phrase[12].isActive = !phrase[12].isActive;
          phrase[13].isActive = !phrase[13].isActive;
          break;
        case 3:
          phrase[1].isActive = !phrase[1].isActive;
          phrase[8].isActive = !phrase[8].isActive;
          phrase[10].isActive = !phrase[10].isActive;
          break;
        case 4:
          phrase[5].isActive = !phrase[5].isActive;
          phrase[6].isActive = !phrase[6].isActive;
          phrase[7].isActive = !phrase[7].isActive;
          phrase[8].isActive = !phrase[8].isActive;
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
      <MainBackgroundImage>
        <WarriorImg />
        <BackgroundWarrior />
        {phrase.map((i) => (
          <BackgroundText isActive={i.isActive}>{i.letter}</BackgroundText>
        ))}
      </MainBackgroundImage>
    </div>
  );
}

export default App;
