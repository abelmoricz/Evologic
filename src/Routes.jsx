import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing"
import Grow from "./pages/grow";
import Make from "./pages/make";
import Mission from "./pages/mission";
import Work_With_Us from "./pages/work_with_us";


import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Landing} />

                    <Route path="/solve_and_make" exact component={Make} />
                    <Route path="/grow" exact component={Grow} />
                    <Route path="/mission" exact component={Mission} />
                    <Route path="/work_with_us" exact component={Work_With_Us} />

                </Switch>
            </BrowserRouter>
        )
    }
}
