import styled from "@emotion/styled";
import React from "react";
import { FC } from "react";
import { Units } from "../../../types/units";

export interface IUnitsIconProps {
  size: 25 | 30 | 45 | 50 | 60 | 75 | 90;
  unit: keyof typeof Units;
}

const StyledUnitsIcon = styled("div")<IUnitsIconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-size: contain;
  background-image: url(${({ unit }) => {
    try {
      return require(`../../../assets/images/units/${Units[unit]}.png`);
    } catch (e) {
      return require(`../../../assets/images/units/land_placeholder.png`);
    }
  }});
`;

const UnitsIcon: FC<IUnitsIconProps> = ({
  size = 50,
  unit = "PLACEHOLDER",
}) => {
  return <StyledUnitsIcon size={size} unit={unit} />;
};

export default UnitsIcon;
