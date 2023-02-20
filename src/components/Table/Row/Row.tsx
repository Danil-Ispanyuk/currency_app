import React, { PropsWithChildren } from "react";
import * as Styled from "./style";

export default function Row({ children }: PropsWithChildren) {
  return <Styled.Container>{children}</Styled.Container>;
}
