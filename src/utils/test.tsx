import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../redux";
import theme from "theme";
import { IReactChildren } from "types/common.type";
import userEvent from "@testing-library/user-event";

export const testRender = (children: IReactChildren) => {
    return render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
    );
};

export const onChooseOption = async (element: HTMLElement, index: number) => {
    const select = within(element).getByTestId("dropdown__content");
    userEvent.click(select);
    const options = await within(element).findAllByTestId("dropdown__option");
    userEvent.click(options[index]);
};
