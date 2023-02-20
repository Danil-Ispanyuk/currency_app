import { FC, PropsWithChildren } from "react";
import * as Styled from "./style";

interface IProps {
  width?: string;
  height?: string;
  onClick: () => void;
}

export const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  width = "150px",
  height = "42px",
  onClick,
}) => {
  return (
    <Styled.Button onClick={onClick} width={width} height={height}>
      {children}
    </Styled.Button>
  );
};
