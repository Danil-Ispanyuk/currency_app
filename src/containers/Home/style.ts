import styled from "styled-components";
import { ReactComponent as IconChange } from "assets/right-left.svg";

export const LoaderContainer = styled.div``;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const TableContainer = styled.div`
    max-width: 80%;
    width: 100%;
`;

export const ExchangeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ExchangeContent = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 40px;

    @media (max-width: 985px) {
        flex-direction: column;
    }
`;

export const InputContainer = styled.div`
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChangeIcon = styled(IconChange)`
    width: 30px;
    margin: 0 10px;
    margin-top: 30px;
    cursor: pointer;

    @media (max-width: 985px) {
        width: 40px;
        margin: 30px 0;
    }
`;

export const ErrorContainer = styled.div`
    font-size: 22px;
    max-width: 500px;
    padding: 20px;
    margin: 0 10px;
    width: calc(100% - 20px);
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.deepGrey};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
`;
