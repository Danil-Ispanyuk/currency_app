import { FC, useEffect, useState } from "react";
import * as Styled from "../../style";
import { ExchangeField } from "../../../../components";
import { ExchangeVariant } from "../../../../types/exchange.type";
import { ICurrencyData } from "../../../../types/currency.type";

export const ExchangeCurrencyConverter: FC<{ data: ICurrencyData[] }> = ({ data }): JSX.Element => {
    const [currencyGetUnit, setCurrencyGetUnit] = useState<string>("");
    const [currencyChangeUnit, setCurrencyChangeUnit] = useState<string>("");
    const [currencyChangeValue, setCurrencyChangeValue] = useState<string | number>(0);
    const [currencyValue, setCurrencyValue] = useState<string | number>("");

    const handleCurrencyChangeValue = (value: string | number): void => {
        setCurrencyChangeValue(value);
    };

    const handleChooseChangeUnit = (option: string): void => {
        setCurrencyChangeUnit(option);
    };

    const handleChooseGetUnit = (option: string): void => {
        setCurrencyGetUnit(option);
    };

    const handleExchange = (): void => {
        const unitGet = currencyGetUnit;
        const unitChange = currencyChangeUnit;
        setCurrencyChangeUnit(unitGet);
        setCurrencyGetUnit(unitChange);
    };

    useEffect(() => {
        if (!data || !currencyGetUnit) return;
        const element = data.find(
            (item: any) => item.pair.includes(currencyChangeUnit) && item.pair.includes(currencyGetUnit)
        );
        if (element) {
            const currencies = element?.pair.split("/");
            let result = 0;
            if (currencies[0] === currencyChangeUnit) {
                result = Number(currencyChangeValue) * Number(element.sale);
            } else {
                result = Number(currencyChangeValue) / Number(element.buy);
            }
            return setCurrencyValue(result.toFixed(2));
        }
    }, [currencyChangeValue, currencyChangeUnit, currencyGetUnit, data]);

    return (
        <Styled.ExchangeContainer>
            <Styled.ExchangeContent>
                <ExchangeField
                    label={"Change"}
                    value={currencyChangeValue}
                    onChange={handleCurrencyChangeValue}
                    data={data}
                    dropdownConfig={{
                        width: "100px",
                        height: "38px"
                    }}
                    dropdownValue={currencyChangeUnit}
                    dropdownOnChange={handleChooseChangeUnit}
                    variant={ExchangeVariant.CHANGE}
                    testid={"exchanged-change"}
                    dropdownPlaceholder={"UAH"}
                />
                <Styled.ChangeIcon data-testid="change-button" onClick={handleExchange} />
                <ExchangeField
                    data={data}
                    label={"Get"}
                    value={currencyValue}
                    dropdownValue={currencyGetUnit}
                    currencyChangeUnit={currencyChangeUnit}
                    dropdownOnChange={handleChooseGetUnit}
                    dropdownConfig={{
                        width: "100px",
                        height: "38px"
                    }}
                    readonly={true}
                    variant={ExchangeVariant.GET}
                    testid={"exchanged-get"}
                    dropdownPlaceholder={"USD"}
                />
            </Styled.ExchangeContent>
        </Styled.ExchangeContainer>
    );
};
