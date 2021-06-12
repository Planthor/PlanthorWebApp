import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ActivityPage from "../pages/ActivityPage/ActivityPage";
import CreateNewGoalPage from "../pages/CreateNewGoalPage/CreateNewGoalPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProfileManagementPage from "../pages/ProfileManagementPage/ProfileManagementPage";

function App() {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="" element={<LandingPage />}></Route>
                <Route path="activity" element={<ActivityPage />}></Route>
                <Route
                    path="profile"
                    element={<ProfileManagementPage />}
                ></Route>
                <Route path="newgoal" element={<CreateNewGoalPage />}></Route>
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
