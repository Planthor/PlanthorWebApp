import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ActivityPage from "../pages/ActivityPage/ActivityPage";
import CreateNewGoalPage from "../pages/CreateNewGoalPage/CreateNewGoalPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProfileManagementPage from "../pages/ProfileManagementPage/ProfileManagementPage";
import "../styles/common.scss";

function App() {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="" element={<LandingPage />} />
                <Route path="activity" element={<ActivityPage />} />
                <Route path="profile" element={<ProfileManagementPage />} />
                <Route path="newgoal" element={<CreateNewGoalPage />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
