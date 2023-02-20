import * as Styled from "./style";
import LoaderGif from "assets/loader.gif";
import { FC } from "react";

interface IProps {
    styles?: {
        width?: string;
        margin?: string;
    };
}

export const Loader: FC<IProps> = ({ styles }) => {
    return (
        <Styled.Wrapper styles={styles}>
            <Styled.LoaderImg src={LoaderGif} />
        </Styled.Wrapper>
    );
};
