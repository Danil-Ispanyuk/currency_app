import React, { useEffect, useMemo } from "react";
import { ICurrencyData } from "types/currency.type";
import { ExchangeVariant } from "types/exchange.type";
import { DropDown } from "../DropDown/DropDown";
import { Input } from "../Input/Input";
import { getCurrencyUnit } from "./helper";
import * as Styled from "./style";

interface IProps {
    label: string;
    value: string | number;
    onChange?: (e: string | number) => void;
    data: ICurrencyData[] | undefined;
    dropdownValue: string;
    dropdownOnChange: (option: string) => void;
    variant: ExchangeVariant;
    readonly?: boolean;
    currencyChangeUnit?: string;
    dropdownConfig: {
        width: string;
        height: string;
    };
    testid?: string;
}

export function ExchangeField({
    label,
    value,
    onChange,
    dropdownValue,
    dropdownOnChange,
    dropdownConfig,
    variant,
    data = [],
    readonly,
    currencyChangeUnit,
    testid
}: IProps) {
    const options = useMemo(() => {
        if (ExchangeVariant.CHANGE === variant) {
            return Array.from(
                new Set([
                    ...data.reduce((acc: string[], item) => {
                        acc.push(item.ccy);
                        acc.push(item.base_ccy);

                        return acc;
                    }, [])
                ])
            );
        } else if (ExchangeVariant.GET === variant) {
            const result = data.reduce((acc: string[], item) => {
                if (item.pair.includes(currencyChangeUnit || "")) {
                    const unit = getCurrencyUnit(item, currencyChangeUnit || "");
                    acc.push(unit);
                }
                return acc;
            }, []);
            return result;
        }
    }, [data, currencyChangeUnit, variant]);

    useEffect(() => {
        if (options && currencyChangeUnit) {
            if (currencyChangeUnit === dropdownValue || !options.includes(dropdownValue)) {
                return dropdownOnChange(options[0]);
            }
        }
        // eslint-disable-next-line
    }, [currencyChangeUnit, options, dropdownValue]);

    return (
        <Styled.Container data-testid={testid}>
            <Input
                maxWidth={"250px"}
                label={label}
                value={value}
                onChange={onChange}
                type={"number"}
                readonly={readonly}
                inputConfig={{
                    min: "1"
                }}
                testId={"exchanged-input"}
            />
            <Styled.DropdownContainer>
                <DropDown value={dropdownValue} onChange={dropdownOnChange} options={options} config={dropdownConfig} />
            </Styled.DropdownContainer>
        </Styled.Container>
    );
}
