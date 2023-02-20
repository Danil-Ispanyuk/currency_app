import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.black}50;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Logo = styled(LogoIcon)`
  max-width: 70px;
  width: 100%;
  height: 100%;
  object-fit: content;
`;

export const Content = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
