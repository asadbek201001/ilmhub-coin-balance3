// Libraries
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

// Component
import App from "./App.jsx";

// Redux
import { store } from "./utils/redux/store.js";

// Context Providers
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

// Style
import "./index.css";

// Root element
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
);
