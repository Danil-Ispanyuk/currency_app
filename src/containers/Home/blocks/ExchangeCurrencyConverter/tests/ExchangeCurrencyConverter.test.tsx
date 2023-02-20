import { Home } from "../../../Home";
import { ICurrencyData } from "types/currency.type";
import { onChooseOption, testRender } from "utils/test";
import * as Hooks from "../../../../../redux/currency/currency.api";
import { fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const currencyData: ICurrencyData[] = [
    {
        id: "12",
        pair: "EUR/UAH",
        ccy: "EUR",
        base_ccy: "UAH",
        buy: "40.90000",
        sale: "41.90000"
    }
];

const value = 100;

describe("Exchange Currency Converter", () => {
    beforeEach(() => {
        const response = {
            data: currencyData,
            refetch: jest.fn()
        };
        jest.spyOn(Hooks, "useGetCurrencyQuery").mockImplementation(() => response);
    });
    it("Check converter work when sale EUR to buy UAH", async () => {
        testRender(<Home />);
        const exchangedChanged = screen.getByTestId("exchanged-change");
        const exchangedInput = within(exchangedChanged).getByTestId("exchanged-input");
        const exchangedDropdown = within(exchangedChanged).getByTestId("dropdown__container");
        await onChooseOption(exchangedDropdown, 0);

        fireEvent.change(exchangedInput, { target: { value } });

        const exchangedGet = screen.getByTestId("exchanged-get");
        const exchangedGetInput = await within(exchangedGet).findByTestId("exchanged-input");
        expect(exchangedGetInput).toHaveValue(value * Number(currencyData[0].sale));
    });
    it("Check converter work when buy EUR to sale UAH", async () => {
        testRender(<Home />);
        const exchangedChanged = screen.getByTestId("exchanged-change");
        const exchangedInput = within(exchangedChanged).getByTestId("exchanged-input");
        const exchangedDropdown = within(exchangedChanged).getByTestId("dropdown__container");
        await onChooseOption(exchangedDropdown, 0);

        fireEvent.change(exchangedInput, { target: { value } });

        const changeButton = screen.getByTestId("change-button");

        userEvent.click(changeButton);

        const exchangedGet = screen.getByTestId("exchanged-get");
        const exchangedGetInput = await within(exchangedGet).findByTestId("exchanged-input");
        const expectedValue = (value / Number(currencyData[0].buy)).toFixed(2);
        expect(exchangedGetInput).toHaveValue(Number(expectedValue));
    });
});
