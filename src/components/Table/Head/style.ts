import styled from "styled-components";

export const Container = styled.thead`
  position: relative;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.deepGrey};
  border-radius: 8px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;

  tr:last-child td:first-child {
    border-radius: 8px 0 0 8px;
  }

  tr:last-child td:last-child {
    border-radius: 0 8px 8px 0;
  }
  user-select: none;
`;
