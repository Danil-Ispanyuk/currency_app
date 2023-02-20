import styled from "styled-components";

export const Wrapper = styled.div<{
  styles?: {
    width?: string;
    margin?: string;
  };
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ styles }) => styles?.width || "100%"};
  height: 100%;
  ${({ styles }) => (styles?.margin ? `margin: ${styles?.margin};` : null)}
`;

export const LoaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
