import React from "react";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";
import FabContact from "./components/FabContact";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-style">
        <Navigation />
        <Header />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
      <FabContact />
    </ThemeProvider>
  );
};

export default App;
