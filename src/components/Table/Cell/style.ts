import styled from "styled-components";
import { ReactComponent as PencilIcon } from "../../../assets/pencil.svg";

export const EditContainer = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.deepGrey};
    transition: opacity 0.3s ease;
    cursor: pointer;
    top: -10px;
    right: -10px;
    opacity: 0;
    z-index: 10;
`;

export const EditIcon = styled(PencilIcon)`
    display: block;
    width: 15px;
    height: 15px;
    transform: translate(50%, 50%);
    object-fit: contain;
    & path {
        fill: ${({ theme }) => theme.colors.white};
    }
`;

export const Container = styled.td<{
    isEditMode: boolean | undefined;
}>`
    transition: background-color 0.3s ease;

    position: relative;
    ${({ isEditMode }) =>
        isEditMode &&
        `
    &:hover{
      background-color: #00000030;
      & ${EditContainer} {
        opacity: 1;
      }
    }
  `}
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;

    justify-content: center;

    margin: 0 20px;
    white-space: nowrap;
`;
