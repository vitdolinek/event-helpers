import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import image from "../../assets/images/button_sprite.png";

export interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const StyledButtonBase = styled("div")`
  background-image: url(${image});
  background-repeat: no-repeat;
  width: 4px;
  position: absolute;
  height: 23px;
`;

const StyledButtonLeft = styled(StyledButtonBase)`
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
  text-align: center;
  font-weight: 700;
  padding: 0 13px;
  font-size: 12px;
  &:hover {
    background-position: 0 -161px;
  }
`;

const StyledButtonWrapper = styled("div")<IButtonProps>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 23px;
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
  vertical-align: middle;
  user-select: none;
  border: 0;
  padding: 0;
  margin: 5px;
  font-size: 13px;

  ${StyledButtonLeft} {
    background-position: ${({ disabled }) =>
      disabled ? `0 -115px` : `0 -69px`};
  }

  ${StyledButtonRight} {
    background-position: ${({ disabled }) => disabled && ` -27px -46px;`};
  }

  ${StyledButtonCaption} {
    background-position: ${({ disabled }) => disabled && `0 -184px`};
    color: ${({ disabled }) => (disabled ? "#ccb" : "#fc6")};
    vertical-align: middle;
  }
`;

const Button: FC<IButtonProps> = ({ disabled, children, ...rest }) => (
  <StyledButtonWrapper disabled={disabled} {...rest}>
    <StyledButtonLeft />
    <StyledButtonRight />
    <StyledButtonCaption>{children}</StyledButtonCaption>
  </StyledButtonWrapper>
);

export default Button;
