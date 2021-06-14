import React from 'react';
import { Route, Switch } from "react-router";
import Header from '../components/header';
import AppContent from '../components/app-content';
import ResultsContainer from '../components/results-container';
import ProductDetail from '../components/product-detail';
import styles from '../sass/app.module.scss'

const App = ()  => {
    return (
        <div className={styles.app}>
            <Header />
            <AppContent>
                <Switch>
                    <Route exact path="/"/>
                    <Route path="/items" exact>
                        <ResultsContainer />
                    </Route>
                    <Route path="/items/:id">
                        <ProductDetail />
                    </Route>
                </Switch>
            </AppContent>
        </div>
    );
}

export default App;