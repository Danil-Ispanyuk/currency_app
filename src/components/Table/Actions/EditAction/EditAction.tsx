import React, { useMemo, useState } from "react";
import { ICurrencyData } from "../../../../types/currency.type";
import { Input, VariantInput } from "../../../Input/Input";
import * as Styled from "./style";

interface IProps {
    currentValue: string | number;
    initialData: ICurrencyData[] | [];
    rowIndex: number;
    headerKey: keyof ICurrencyData | string;
    toggleEditMode: (value: string) => void;
    onEditTableValue: ((value: string | number, headerKey: keyof ICurrencyData, index: number) => void) | undefined;
}

export default function EditAction({
    toggleEditMode,
    currentValue,
    initialData,
    rowIndex,
    headerKey,
    onEditTableValue
}: IProps) {
    const [editValue, setEditValue] = useState<string | number>(currentValue);

    const inputConfig = useMemo(() => {
        if (!initialData.length) return;

        const initialCurrencyValue = initialData[rowIndex as number][headerKey as keyof ICurrencyData];
        const rangeMinValue = Number(initialCurrencyValue) - Number(initialCurrencyValue) * 0.1;
        const rangeMaxValue = Number(initialCurrencyValue) + Number(initialCurrencyValue) * 0.1;
        return {
            min: rangeMinValue.toFixed(1),
            max: rangeMaxValue.toFixed(1),
            step: 0.1
        };
    }, [headerKey, initialData, rowIndex]);

    const onEditValueChange = (value: string | number) => {
        setEditValue(value);
    };

    const onSaveValue = () => {
        if (currentValue === editValue || !onEditTableValue) return;
        if (editValue >= Number(inputConfig?.min) && editValue <= Number(inputConfig?.max)) {
            onEditTableValue(editValue, headerKey as keyof ICurrencyData, rowIndex);
            toggleEditMode("");
        }
    };

    return (
        <Styled.Container data-testid="editAction__container">
            <Styled.Icons>
                <Styled.Save data-testid="editAction-save-icon" onClick={onSaveValue}>
                    <Styled.CheckIcon />
                </Styled.Save>
                <Styled.Discard data-testid="editAction-discard-icon" onClick={() => toggleEditMode("")}>
                    <Styled.CloseIcon />
                </Styled.Discard>
            </Styled.Icons>
            <Input
                type="number"
                value={editValue}
                onChange={onEditValueChange}
                maxWidth="200px"
                variant={VariantInput.outline}
                inputConfig={inputConfig}
                testId="editAction-input"
            />
        </Styled.Container>
    );
}
