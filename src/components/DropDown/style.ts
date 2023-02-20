import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DropdownArea = styled.div<{
    isPlaceholder: boolean | undefined;
    config: {
        width: string;
        height: string;
    };
}>`
    width: ${({ config }) => config.width};
    height: ${({ config }) => config.height};
    text-align: center;
    padding: 5px;
    cursor: pointer;
    font-size: 22px;
    border-radius: 10px;
    color: ${({ theme, isPlaceholder }) => (isPlaceholder ? `${theme.colors.grey}50` : theme.colors.black)};
    border: 1px solid ${({ theme }) => theme.colors.deepGrey};
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Options = styled.ul`
    width: 100%;
    position: absolute;
    top: calc(100% + 5px);
    max-height: 150px;
    border-radius: 10px;
    border-top: 0px;
    padding: 8px 0;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.07);
    z-index: 999;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.deepGrey};
`;

export const Option = styled.li`
    padding: 5px 12px;
    transition: 0.3s ease background;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.deepGrey}50;
    }
`;
