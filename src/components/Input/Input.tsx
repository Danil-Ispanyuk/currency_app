import { FC, ReactNode } from "react";
import * as Styled from "./style";

export enum VariantInput {
    underline = "underline",
    outline = "outline"
}

interface IProps {
    maxWidth?: string;
    label?: string;
    type?: string;
    value?: string | number | ReactNode;
    onChange?: ((e: string | number) => void) | undefined;
    variant?: VariantInput;
    inputConfig?: {
        min?: string;
        max?: string;
    };
    readonly?: boolean | undefined;
    testId?: string;
}

export const Input: FC<IProps> = ({
    maxWidth = "100%",
    label,
    type = "text",
    value = "",
    onChange = () => {},
    variant = VariantInput.underline,
    inputConfig,
    readonly = false,
    testId = "input"
}) => {
    return (
        <Styled.Container maxWidth={maxWidth}>
            {label && <Styled.Label>{label}</Styled.Label>}
            <Styled.Input
                data-testid={testId}
                type={type}
                variant={variant}
                value={value as string}
                onChange={(e) => onChange(e.target.value)}
                readOnly={readonly}
                {...inputConfig}
            />
        </Styled.Container>
    );
};
