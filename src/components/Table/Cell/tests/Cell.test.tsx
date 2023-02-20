import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testRender } from "utils/test";
import Cell from "../Cell";

const rowId = "0";

describe("Action > Edit", () => {
    describe("Usage of Edit mode", () => {
        it("Edit mode is use", () => {
            testRender(<Cell isEditMode={true}>test</Cell>);
            const element = screen.getByTestId("cellEdit__container");
            expect(element).toBeInTheDocument();
        });
        it("Edit mode is not use", () => {
            testRender(<Cell isEditMode={false}>test</Cell>);
            const element = screen.queryByTestId("cellEdit__container");
            expect(element).not.toBeInTheDocument();
        });
    });
    describe("Activation of Edit mode", () => {
        it("Active Edit mode", async () => {
            testRender(
                <Cell isEditMode={true} rowId={rowId}>
                    test
                </Cell>
            );
            const cellContainer = screen.getByTestId("cellEdit__container");
            userEvent.click(cellContainer);
            const element = await screen.findByTestId("editAction__container");
            expect(element).toBeInTheDocument();
        });
        it("Not active Edit mode", () => {
            testRender(
                <Cell isEditMode={true} rowId={rowId}>
                    test
                </Cell>
            );
            const element = screen.queryByTestId("editAction__container");
            expect(element).not.toBeInTheDocument();
        });
    });
});
