import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import DesktopPage from "pages/Desktop";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* <DesktopPage />
         */}
        <h1>
          hello world
        </h1>
      </Router>
    </ChakraProvider>
  );
}

export default App;
