import React from "react";
import { Route, Switch } from "react-router";
import Header from "../../components/header";
import Results from "../results";
import ConnectedItemDescription from "../../components/connected/ConnectedItemDescription";
import ConnectedItems from "../../components/connected/ConnectedItems";

import styles from "./styles.module.scss"

const App = ()  => (
    <div className={styles.app}>
        <Header />
        <div>
            <Switch>
                <Route exact path="/"/>
                <Route path="/items" exact>
                    <Results>
                        <ConnectedItems />
                    </Results>
                </Route>
                <Route path="/items/:id">
                    <Results>
                        <ConnectedItemDescription />
                    </Results>
                </Route>
            </Switch>
        </div>
    </div>
);

export default App;
