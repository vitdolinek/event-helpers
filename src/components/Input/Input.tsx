import styled from "@emotion/styled";
import React, { FC } from "react";
import input from "../../assets/images/input.png";

const StyledInputWrapper = styled("span")`
  height: 23px;
  overflow: hidden;
`;

const StyledInputLeft = styled("span")`
  background: url(${input}) 0 0 no-repeat;
  display: inline-block;
  background-position: left 0;
`;

const StyledInputRight = styled("span")`
  background: url(${input}) 0 0 no-repeat;
  display: inline-block;
  background-position: right -23px;
`;

const StyledInput = styled("input")`
  background: url(${input}) 0 -46px repeat-x;
  border: 0 none;
  margin: 0 5px;
  padding: 1px;
  height: 21px;
  outline: 0;
  z-index: 10000;
  position: relative;
`;

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = (props) => (
  <StyledInputWrapper>
    <StyledInputLeft>
      <StyledInputRight>
        <StyledInput {...props} />
      </StyledInputRight>
    </StyledInputLeft>
  </StyledInputWrapper>
);

export default Input;
