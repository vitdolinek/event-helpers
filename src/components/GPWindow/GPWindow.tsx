import React from "react";
import styled from "@emotion/styled";
import { FC } from "react";
import vertical from "../../assets/images/window/vertical.png";
import horizontal from "../../assets/images/window/horizontal.png";
import corners from "../../assets/images/window/corners.png";
import bg from "../../assets/images/window/bg.jpg";

const StyledWrapper = styled("div")<IGPWindowProps>`
  position: absolute;
  width: ${({ width }) => width || "300px"};
  min-height: 0px;
  max-height: none;
  height: ${({ height }) => height || "300px"};
`;

const StyledTitleBar = styled("div")`
  height: 34px;
  position: absolute;
  left: -16px;
  right: -16px;
  cursor: default;
  z-index: 15;
  padding: 7px 8px 0 10px;
  color: white;
  font-weight: 700;
`;

const StyledWindowHorizontalBase = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
`;

const StyledWindowTop = styled(StyledWindowHorizontalBase)`
  height: 44px;
  top: 0;
  background: url(${horizontal}) 0 -17px repeat-x;
`;

const StyledWindowBottom = styled(StyledWindowHorizontalBase)`
  height: 17px;
  bottom: 0;
  background: url(${horizontal}) 0 0px repeat-x;
`;

const StyledWindowVerticalBase = styled("div")`
  background-image: url(${vertical});
  background-repeat: repeat-y;
  position: absolute;
  top: 44px;
  bottom: 17px;
  width: 16px;
  overflow: hidden;
  display: block;
`;

const StyledWindowLeft = styled(StyledWindowVerticalBase)`
  background-position: -10px 0;
  left: -16px;
`;
const StyledWindowRight = styled(StyledWindowVerticalBase)`
  background-position: -26px 0;
  right: -16px;
`;

const StyledWindowCorner = styled("div")`
  background-image: url(${corners});
  background-repeat: no-repeat;
  width: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

const StyledWindowTopLeftCorner = styled(StyledWindowCorner)`
  height: 44px;
  left: -16px;
  background-position: left -34px;
`;

const StyledWindowTopRightCorner = styled(StyledWindowCorner)`
  height: 44px;
  right: -16px;
  background-position: right -78px;
`;

const StyledWindowBottomLeftCorner = styled(StyledWindowCorner)`
  left: -16px;
  height: 17px;
  background-position: left 0;
`;

const StyledWindowBottomRightCorner = styled(StyledWindowCorner)`
  right: -16px;
  height: 17px;
  background-position: right -17px;
`;

const StyledWindowContent = styled("div")`
  background: url(${bg}) 0 0 repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 17px;
  text-align: left;
  z-index: 15;
`;

interface IGPWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  width?: number;
  height?: number;
}

const GPWindow: FC<IGPWindowProps> = (props) => (
  <StyledWrapper {...props}>
    <StyledTitleBar>{props.title} dsads</StyledTitleBar>
    <StyledWindowLeft />
    <StyledWindowRight />
    <StyledWindowTop>
      <StyledWindowTopLeftCorner />
      <StyledWindowTopRightCorner />
    </StyledWindowTop>
    <StyledWindowBottom>
      <StyledWindowBottomLeftCorner />
      <StyledWindowBottomRightCorner />
    </StyledWindowBottom>
    <StyledWindowContent>test</StyledWindowContent>
  </StyledWrapper>
);

export default GPWindow;
