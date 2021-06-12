import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ActivityPage from "../pages/ActivityPage/ActivityPage";
import CreateNewGoalPage from "../pages/CreateNewGoalPage/CreateNewGoalPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProfileManagementPage from "../pages/ProfileManagementPage/ProfileManagementPage";

function App() {
    return (
        // HashRouter for solving Github Page problem unable to forward routing. Can consider change back to BrowserRouter when we host in our own webservice.
        <HashRouter>
            <NavBarComponent />
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path="" element={<LandingPage />}></Route>
                <Route path="activity" element={<ActivityPage />}></Route>
                <Route
                    path="profile"
                    element={<ProfileManagementPage />}
                ></Route>
                <Route path="newgoal" element={<CreateNewGoalPage />}></Route>
            </Routes>
            <FooterComponent />
        </HashRouter>
    );
}

export default App;
