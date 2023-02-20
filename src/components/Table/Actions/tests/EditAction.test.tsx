import { fireEvent, screen, within } from "@testing-library/react";
import { testRender } from "utils/test";
import EditAction from "../EditAction/EditAction";
import { ICurrencyData } from "types/currency.type";
import userEvent from "@testing-library/user-event";
import * as Hooks from "../../../../redux/currency/currency.api";
import { Home } from "containers";

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
const toggleEditMode = jest.fn();
const rowIndex = 0;
const headerKey = "buy";
const currentValue = currencyData[rowIndex][headerKey];
const onEditTableValue = jest.fn();
const newInputValue = 38.5;

const getFields = () => {
    const saveIcon = screen.getByTestId("editAction-save-icon");
    const input = screen.getByTestId("editAction-input");
    const discardIcon = screen.getByTestId("editAction-discard-icon");
    const container = screen.getByTestId("editAction__container");

    return {
        saveIcon,
        discardIcon,
        input,
        container
    };
};

describe("Action > Edit", () => {
    beforeEach(() => {
        const response = {
            data: currencyData,
            refetch: jest.fn()
        };
        jest.spyOn(Hooks, "useGetCurrencyQuery").mockImplementation(() => response);
    });

    it("Display initial data value", () => {
        testRender(
            <EditAction
                toggleEditMode={toggleEditMode}
                currentValue={currentValue}
                initialData={currencyData}
                rowIndex={rowIndex}
                headerKey={headerKey}
                onEditTableValue={onEditTableValue}
            />
        );
        const { input } = getFields();
        expect(input).toHaveValue(Number(currencyData[0].buy));
    });

    it("The save icon should be disabled if the value didn't change", () => {
        testRender(
            <EditAction
                toggleEditMode={toggleEditMode}
                currentValue={currentValue}
                initialData={currencyData}
                rowIndex={rowIndex}
                headerKey={headerKey}
                onEditTableValue={onEditTableValue}
            />
        );
        const { saveIcon, container } = getFields();
        userEvent.click(saveIcon);
        expect(container).toBeInTheDocument();
    });

    it("The save icon should save new value", async () => {
        testRender(<Home />);
        const tableBody = await screen.findByTestId("table-body");
        const cellContainers = await within(tableBody).findAllByTestId("cell__container");
        const cellEditContainer = await within(cellContainers[1]).findByTestId("cellEdit__container");

        userEvent.click(cellEditContainer);

        const saveIcon = await screen.findByTestId("editAction-save-icon");
        const input = await screen.findByTestId("editAction-input");
        fireEvent.change(input, { target: { value: newInputValue } });
        userEvent.click(saveIcon);

        const cellContent = await within(cellContainers[1]).findByTestId("cell__content");
        expect(cellContent).toHaveTextContent(String(newInputValue));
    });

    it("The discard icon should back the initial value", async () => {
        testRender(<Home />);
        const tableBody = await screen.findByTestId("table-body");
        const cellContainers = await within(tableBody).findAllByTestId("cell__container");
        const cellEditContainer = await within(cellContainers[1]).findByTestId("cellEdit__container");

        userEvent.click(cellEditContainer);

        const discardIcon = await screen.findByTestId("editAction-discard-icon");
        const input = await screen.findByTestId("editAction-input");
        fireEvent.change(input, { target: { value: newInputValue } });
        userEvent.click(discardIcon);

        const cellContent = await within(cellContainers[1]).findByTestId("cell__content");
        expect(cellContent).toHaveTextContent(currencyData[0].buy);
    });
});
