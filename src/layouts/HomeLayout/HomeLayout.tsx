import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "../../components";
import * as Styled from "./style";

interface IProps {
    onUpdate: () => void;
}

export const HomeLayout: FC<PropsWithChildren<IProps>> = ({ children, onUpdate }) => {
    return (
        <Styled.Container>
            <Header onUpdate={onUpdate} />
            {children}
            <Footer>2023 all right reserved</Footer>
        </Styled.Container>
    );
};
