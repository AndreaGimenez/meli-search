import React from 'react';
import { Route, Switch } from "react-router";
import Header from '../components/Header';
import AppContent from '../components/AppContent';
import ResultsContainer from './ResultsContainer';
import ItemDetail from '../components/ItemDetail';
import ItemsList from '../components/ItemsList';
import styles from '../sass/app.module.scss'

const App = ()  => {
    return (
        <div className={styles.app}>
            <Header />
            <AppContent>
                <Switch>
                    <Route exact path="/"/>
                    <Route path="/items" exact>
                        <ResultsContainer>
                            <ItemsList />
                        </ResultsContainer>
                    </Route>
                    <Route path="/items/:id">
                        <ResultsContainer>
                            <ItemDetail />
                        </ResultsContainer>
                    </Route>
                </Switch>
            </AppContent>
        </div>
    );
}

export default App;