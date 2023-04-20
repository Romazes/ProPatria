import styled from "styled-components";

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
    font-size: 27px;
    line-height: 37px;
  }
`;

export default Subtitle;
