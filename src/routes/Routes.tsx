import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import IntroductionRoute from "./IntroductionRoute";

export default function Routes() {
    return (
        <MainLayout>
            <BrowserRouter>
                <IntroductionRoute />
            </BrowserRouter>
        </MainLayout>
    );
}
