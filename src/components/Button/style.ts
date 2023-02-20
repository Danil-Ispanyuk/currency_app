import styled from "styled-components";

export const Button = styled.button<{
  width: string;
  height: string;
}>`
  outline: none;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepGrey};
    color: ${({ theme }) => theme.colors.white};
  }
`;
