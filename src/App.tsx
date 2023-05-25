import { useMemo, useState } from "react";
import {
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";

import "./App.css";
import { themeSettings } from "./theme";
type PaletteMode = "light" | "dark";
function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {mode === "light" ? (
        <Button variant="contained" onClick={() => setMode("dark")}>
          Light
        </Button>
      ) : (
        <Button variant="contained" onClick={() => setMode("light")}>
          Dark
        </Button>
      )}
    </ThemeProvider>
  );
}

export default App;
