import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Activity from "./pages/Activity/Activity";
import Introduction from "./pages/Introduction/Introduction";
import ProfileManagement from "./pages/ProfileManagement/ProfileManagement";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="" element={<Introduction />} />
        <Route path="activity" element={<Activity />} />
        <Route path="profile" element={<ProfileManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
