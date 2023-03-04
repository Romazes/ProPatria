import styled from "styled-components";

const Button = styled.button`
  width: 256px;
  height: 50px;
  background-color: #72785c;
  border: 6px solid #1F231F;
  color: #ffffff;
  cursor: pointer;

  font-family: "Oswald";
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #282d27;

  &:hover {
    background-color: #1F231F;
    color: #72785c;
  }
`;

export default Button;