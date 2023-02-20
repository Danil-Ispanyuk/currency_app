import { FC, PropsWithChildren } from "react";
import * as Styled from "./style";

export const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
