import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage/PrivacyPage";
export function App() {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<PrivacyPage />} />
            </Routes>
        </div>
    );
}

export default App;
