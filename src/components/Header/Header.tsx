import React, { FC } from "react";
import * as Styled from "./style";
import { Button } from "../Button/Button";

export const Header: FC<{ onUpdate: () => void }> = ({ onUpdate }): JSX.Element => {
    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Logo />
                <Button onClick={onUpdate}>Update</Button>
            </Styled.Wrapper>
        </Styled.Container>
    );
};
