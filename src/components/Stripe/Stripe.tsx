import styled from "@emotion/styled";
import React from "react";
import stripe from "../../assets/images/yellow_box.png";

const StyledStripe = styled("div")<IStripeProps>`
  position: relative;
  height: 16px;
  background: url(${stripe}) no-repeat 50% -9px;
  margin: ${({ margin }) => margin ?? "0px"};
  width: 100%;
`;

interface IStripeProps {
  margin?: string;
}

const Stripe: React.FC<IStripeProps> = ({ margin }) => (
  <StyledStripe margin={margin} />
);

export default Stripe;
