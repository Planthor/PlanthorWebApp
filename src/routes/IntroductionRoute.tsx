import React from "react";
import { Route, Switch } from "react-router";
import HelloComponent from "../components/HelloComponent/HelloComponent";
import { PATH } from "../constants/paths";

export default function IntroductionRoute() {
    return (
        <Switch>
            <Route
                path={PATH.INTRODUCTION}
                component={() => <HelloComponent />}
            />
        </Switch>
    );
}
