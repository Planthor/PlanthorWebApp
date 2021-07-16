import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer";
import NavBarComponent from "../components/NavigationBar/NavigationBar";
import Activity from "../pages/Activity/Activity";
import CreateNewGoal from "../pages/CreateNewGoal/CreateNewGoal";
import Introduction from "../pages/Introduction/Introduction";
import ProfileManagement from "../pages/ProfileManagement/ProfileManagement";
import "../styles/common.scss";

function App() {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="" element={<Introduction />} />
                <Route path="activity" element={<Activity />} />
                <Route path="profile" element={<ProfileManagement />} />
                <Route path="newgoal" element={<CreateNewGoal />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
