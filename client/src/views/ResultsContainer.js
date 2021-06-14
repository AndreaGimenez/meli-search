import React from 'react';
import styles from '../sass/results-container.module.scss';

const ResultsContainer = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)

export default ResultsContainer;