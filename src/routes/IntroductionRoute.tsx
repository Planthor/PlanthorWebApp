import React from "react";
import { Route, Switch } from "react-router";
import { PATH } from "../constants/paths";
import IntroductionPage from "../pages/IntroductionPage/IntroductionPage";

export default function IntroductionRoute() {
    return (
        <Switch>
            <Route
                path={PATH.INTRODUCTION}
                component={() => <IntroductionPage />}
            />
        </Switch>
    );
}
