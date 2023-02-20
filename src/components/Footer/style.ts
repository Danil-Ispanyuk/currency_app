import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.black}50;
`;
