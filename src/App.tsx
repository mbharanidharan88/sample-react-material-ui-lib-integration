import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { INavMenuItem, MainLayout } from "eclatech-material-ui";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Icon from "@mui/material/Icon";
import ContactPage from "./components/ContactPage";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";

function App() {
  const theme = useTheme();

  const headerDiv = styled("div")({});

  const styles = {
    headerDiv: {
      fontSize: theme.typography.subtitle1,
    },
  };

  const navItems: INavMenuItem[] = [
    { text: "Home", icon: "home", linkTo: "" },
    { text: "Contact", icon: "contacts", linkTo: "contact" },
  ];

  const header1 = (
    <div style={theme.typography.subtitle1}>
      Eclatech Material UI <Icon>rocket</Icon>
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout headerChildren={header1} navItems={navItems} />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
