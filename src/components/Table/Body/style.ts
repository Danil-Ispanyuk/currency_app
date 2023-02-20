import styled from "styled-components";

export const Container = styled.tbody`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};

  &:before {
    content: "@";
    display: block;
    line-height: 8px;
    opacity: 0;
  }
  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.colors.deepGrey};
    margin-bottom: -1px;
  }
  & > :nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.deepGrey}20;
  }
`;
