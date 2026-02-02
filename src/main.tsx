import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { system } from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="light">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
