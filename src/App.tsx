import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Home } from "./containers";
import store from "./redux";
import theme from "./theme";

function App() {
    if (!localStorage.getItem("counter")) {
        localStorage.setItem("counter", "0");
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
