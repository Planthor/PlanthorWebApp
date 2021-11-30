import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Activity from "../pages/Activity/Activity";
import CreateNewGoal from "../pages/CreateNewGoal/CreateNewGoal";
import Introduction from "../pages/Introduction/Introduction";
import ProfileManagement from "../pages/ProfileManagement/ProfileManagement";
import "../styles/common.scss";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="" element={<Introduction />} />
                <Route path="activity" element={<Activity />} />
                <Route path="profile" element={<ProfileManagement />} />
                <Route path="newgoal" element={<CreateNewGoal />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
