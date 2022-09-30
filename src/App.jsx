import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Workers from "./pages/Workers"
import EnvironmentDetails from "./pages/EnvironmentDetails"
import EnvironmentsSummary from "./pages/EnvironmentsSummary"
import Teams from "./pages/Teams"
import Departments from "./pages/Departments";
import Alerts from "./pages/Alerts";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="workers" element={<Workers />} />
                    <Route path="environmentDetails" element={<EnvironmentDetails />} />
                    <Route path="environmentsSummary" element={<EnvironmentsSummary />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="departments" element={<Departments />} />
                    <Route path="alerts" element={<Alerts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);