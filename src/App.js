import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./scenes/dashboard/dashboard";
import TopBar from "./scenes/global/topBar";
import SideBar from "./scenes/global/SideBar";
// import Team from "./scenes/global/team";
// import Invoices from "./scenes/global/invoices";
// import Contacts from "./scenes/global/contacts";
// import Bar from "./scenes/global/Bar";
// import Form from "./scenes/global/form";
// import Line from "./scenes/global/line";
// import Pie from "./scenes/global/pie";
// import FAQ from "./scenes/global/faq";
// import Geography from "./scenes/global/geography";
// import Calender from "./scenes/global/calender";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {/* used to provide consistent styling, resets style to match browser */}
                <CssBaseline />
                <div className="app">
                    <SideBar />
                    <main className="content">
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            {/* <Route path="/team" element={<Team />} /> */}
                            {/* <Route path="/contacts" element={<Contacts />} /> */}
                            {/* <Route path="/invoices" element={<Invoices />} /> */}
                            {/* <Route path="/form" element={<Form />} /> */}
                            {/* <Route path="/bar" element={<Bar />} /> */}
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geography" element={<Geography />} /> */}
                            {/* <Route path="/calender" element={<Calender />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
