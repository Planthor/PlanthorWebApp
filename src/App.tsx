import Footer from "components/Footer/Footer";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Introduction from "./pages/Introduction/Introduction";
import Activity from "./pages/Activity/Activity";
import ProfileManagement from "./pages/ProfileManagement/ProfileManagement";
import ComponentWidget from "./pages/ComponentWidget/ComponentWidget";
import NotFound from "./pages/NotFoundPage/NotFound";
import Login from "pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="activity" element={<Activity />} />
        <Route path="profile" element={<ProfileManagement />} />
        <Route path="component-widget" element={<ComponentWidget />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
