import React, { forwardRef } from "react";

import { CardContainer } from "./Card.styled";

type CardProps = {
  id: string;
  text: string;
  isPreview?: boolean;
  isHidden?: boolean;
  columnId: string;
};
type Ref = HTMLDivElement;

export const Card = forwardRef((props: CardProps, ref: React.Ref<Ref>) => {
  const { text } = props;
  return (
    <CardContainer ref={ref} {...props}>
      {text}
    </CardContainer>
  );
});

Card.displayName = "Card";
