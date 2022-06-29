import styled from "@emotion/styled";
import React, { createRef, FC, useEffect, useState } from "react";
import background from "../../assets/images/resources/resource.png";
import { colors } from "../../constants/colors";
import { Resources } from "../../types/resources";

interface IResourceIndicatorProps {
  defaultValue: number;
  value: number;
  resource: keyof typeof Resources;
}

const StyledWrapper = styled("div")`
  position: relative;
  width: 72px;
`;

const StyledValue = styled("span")`
  position: absolute;
  color: ${colors.gold};
  font-weight: bold;
  top: 9px;
  right: 3px;
  width: 50%;
  text-align: center;
`;

const ResourceIndicator: FC<IResourceIndicatorProps> = ({
  defaultValue = 0,
  value = 0,
  resource = "ALL",
}) => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const [_defaultValue] = useState(defaultValue);
  const [_value, _setValue] = useState(value);

  const draw: any = (
    current: number,
    context: CanvasRenderingContext2D,
    gradient: any,
    backgroundImage: CanvasImageSource
  ) => {
    const newCurrent = parseFloat((current / _defaultValue - 0.01).toFixed(2));
    const fixedDefaultValue = parseFloat(_defaultValue.toFixed(2));

    context.clearRect(0, 0, 72, 36);
    context.drawImage(backgroundImage, 0, 0);

    context.beginPath();
    context.arc(
      19,
      36 / 2,
      14,
      0.23 * Math.PI,
      (1.52 * (current / fixedDefaultValue) + 0.23) * Math.PI
    );
    context.strokeStyle = gradient;
    context.stroke();

    context.lineWidth = 2.5;

    if (fixedDefaultValue < current) {
      _setValue(newCurrent);

      requestAnimationFrame(() =>
        draw(newCurrent, context, gradient, backgroundImage)
      );
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error("no canvas");
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      console.error("no context");
      return;
    }

    const backgroundImage = new Image();
    backgroundImage.src = background;

    const gradient = context.createLinearGradient(68, 36, 0, 0);

    gradient.addColorStop(0, "#DFB329");
    gradient.addColorStop(1, "#D39030");

    const image = require(`../../assets/images/resources/${resource.toLocaleLowerCase()}.png`);

    const resourceImage = new Image();
    resourceImage.src = image;
    resourceImage.width = 10;
    resourceImage.height = 10;

    backgroundImage.addEventListener(
      "load",
      () => {
        context.drawImage(backgroundImage, 0, 0);
        draw(_value, context, gradient, backgroundImage);
        resourceImage.addEventListener("load", () =>
          context.drawImage(resourceImage, 9, 8, 20, 20)
        );
      },
      { once: true }
    );
  };

  useEffect(() => {
    animate();
  }, [_defaultValue]);

  return (
    <StyledWrapper>
      <canvas id="canvas" width="72" height="36" ref={canvasRef} />
      <StyledValue>{value}</StyledValue>
    </StyledWrapper>
  );
};

export default ResourceIndicator;
