import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-transform: uppercase;
  color: #72785c;

  flex-basis: 100%;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export default Title;
