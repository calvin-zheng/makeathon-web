import {Route, Switch} from "react-router";
import Home from "./home";
import Team from "./team";
import React from "react";
import FAQ from './faq';

const Main = () => {


    return (
        <Switch>
            <Route exact path="/" component={() => <Home />}></Route>
            <Route exact path="/team" component={() => <Team />}></Route>
            <Route exact path="/faq" component={() => <FAQ />}></Route>
        </Switch>
    );
}
export default Main;
