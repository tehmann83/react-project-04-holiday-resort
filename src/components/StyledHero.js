import styled from "styled-components";
import defaultImg from "../images/room-9.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SimpleButton = styled.button`
  color: red;
  background: green;
`;

export default StyledHero;
