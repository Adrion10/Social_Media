import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/HomePage";
import LoginPage from "scenes/LoginPage";
import ProfilePage from "scenes/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaselline, ThemeProvide } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import "./App.css";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvide theme={theme}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/profile:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvide>
      </BrowserRouter>
    </div>
  );
}

export default App;
