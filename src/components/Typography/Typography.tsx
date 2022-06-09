import styled from "@emotion/styled";
import React, { FC } from "react";

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  small: "small",
};

const size = {
  h1: 28,
  h2: 20,
  h3: 18,
  h4: 15,
  body: 14,
  small: 12,
};

const colors = {
  gold: "#f4c363",
  white: "#ffffff",
  black: "#000000",
};

interface ITypographyProps extends React.PropsWithChildren {
  tag: keyof typeof variants;
  color?: keyof typeof colors;
}

const TypographyComponent = (
  props: ITypographyProps & { className?: string }
) =>
  React.createElement(
    variants[props.tag] ?? "p",
    { className: props.className },
    props.children
  );

const StyledTypographyComponent = styled(TypographyComponent)`
  font-size: ${({ tag }) => `${size[tag]}px` ?? "12px"};
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  text-shadow: ${({ color }) =>
    color === "gold" ? "1px 1px #000000" : "none"};
`;

const Typography: FC<ITypographyProps> = ({ tag, color, children }) => {
  return (
    <StyledTypographyComponent tag={tag} color={color}>
      {children}
    </StyledTypographyComponent>
  );
};

export default Typography;
