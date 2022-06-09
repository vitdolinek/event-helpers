import styled from "@emotion/styled";
import React from "react";
import yellowBox from "../../assets/images/yellow_box.png";

const StyledYellowBox = styled("div")<IYellowBoxProps>`
  position: relative;
  height: 16px;
  background: url(${yellowBox}) no-repeat 50% -9px;
  margin: ${({ margin }) => margin ?? "0px"};
  width: 100%;
`;

interface IYellowBoxProps {
  margin?: string;
}

const YellowBox: React.FC<IYellowBoxProps> = ({ margin }) => (
  <StyledYellowBox margin={margin} />
);

export default YellowBox;
