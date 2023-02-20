import styled from "styled-components";
import { VariantInput } from "./Input";

export const Container = styled.div<{
  maxWidth: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{
  variant: VariantInput;
  readOnly: boolean;
}>`
  width: 100%;
  outline: none;
  padding: 5px 0 5px 5px;
  font-size: 27px;

  ${({ readOnly }) =>
    readOnly &&
    `
    cursor: default;
  `}

  ${({ variant, theme }) =>
    VariantInput.underline === variant
      ? `
  border: none;
  border-bottom: 2px solid;
  `
      : `
    border: 2px solid ${theme.colors.darkBlue};
    border-radius: 10px;
    background-color: ${theme.colors.white};
  `}
`;
export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  padding-left: 5px;
  align-self: start;
`;
