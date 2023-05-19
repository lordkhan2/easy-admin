import { ColorModeContext, useMode } from "./theme";
import { CssBaseLine, ThemeProvider } from "@mui/material";
function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {/* used to provide consistent styling, resets style to match browser */}
                <CssBaseLine />
                <div className="app">
                    <main className="content"></main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
