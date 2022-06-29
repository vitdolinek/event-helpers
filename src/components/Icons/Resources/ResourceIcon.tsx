import styled from "@emotion/styled";
import React from "react";
import { FC } from "react";
import { Resources } from "../../../types/resources";

export interface IResourceIconProps {
  size: 25 | 30 | 45 | 50;
  resource: keyof typeof Resources;
}

const StyledUnitsIcon = styled("div")<IResourceIconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-size: contain;
  background-image: url(${({ resource }) => {
    try {
      return require(`../../../assets/images/resources/${Resources[resource]}.png`);
    } catch (e) {
      return require(`../../../assets/images/resources/all.png`);
    }
  }});
`;

const ResourceIcon: FC<IResourceIconProps> = ({
  size = 50,
  resource = "ALL",
}) => {
  return <StyledUnitsIcon size={size} resource={resource} />;
};

export default ResourceIcon;
