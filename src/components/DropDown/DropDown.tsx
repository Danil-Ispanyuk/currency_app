import React, { FC, useRef, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import * as Styled from "./style";

interface IProps {
    options: string[] | undefined;
    value: string;
    onChange: (option: string) => void;
    config?: {
        width: string;
        height: string;
    };
}

export const DropDown: FC<IProps> = ({
    options,
    value,
    onChange,
    config = {
        width: "100%",
        height: "100%"
    }
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef(null);

    const toogleOpen = () => {
        setOpen(!open);
    };

    const onSelect = (option: string) => {
        setOpen(false);
        onChange(option);
    };

    useOutsideClick(ref, () => setOpen(false));

    return (
        <Styled.Container ref={ref} data-testid="dropdown__container">
            <Styled.DropdownArea data-testid="dropdown__content" config={config} onClick={toogleOpen}>
                {value}
            </Styled.DropdownArea>
            {open ? (
                <Styled.Options data-testid="dropdown__options">
                    {options?.map((option, index) => (
                        <Styled.Option data-testid="dropdown__option" onClick={() => onSelect(option)} key={index}>
                            {option}
                        </Styled.Option>
                    ))}
                </Styled.Options>
            ) : null}
        </Styled.Container>
    );
};
