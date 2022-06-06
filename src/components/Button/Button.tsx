import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import image from "../../assets/images/button_sprite.png";

export interface IButtonProps {
  children?: ReactNode;
}

const StyledButtonWrapper = styled("div")`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 23px;
  cursor: pointer;
  vertical-align: middle;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0;
  padding: 0;
  margin: 5px;
  font-size: 13px;
`;

const StyledButtonBase = styled("div")`
  background-image: url(${image});
  background-repeat: no-repeat;
  width: 4px;
  position: absolute;
  height: 23px;
`;

const StyledButtonLeft = styled(StyledButtonBase)`
  background-position: 0 -69px;
  top: 0;
  left: 0;
`;

const StyledButtonRight = styled(StyledButtonBase)`
  background-position: -27px 0;
  top: 0;
  right: 0;
`;

const StyledButtonCaption = styled(StyledButtonBase)`
  background-repeat: repeat-x;
  background-position: 0 -138px;
  width: auto;
  position: relative;
  margin: 0 4px;
  line-height: 23px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fc6;
  text-align: center;
  font-weight: 700;
  padding: 0 13px;
  font-size: 12px;
  &:hover {
    background-position: 0 -161px;
  }
`;

const Button: FC<IButtonProps> = ({ children }) => (
  <StyledButtonWrapper>
    <StyledButtonLeft />
    <StyledButtonRight />
    <StyledButtonCaption>{children}</StyledButtonCaption>
  </StyledButtonWrapper>
);

export default Button;
