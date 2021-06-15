import React from 'react';
import styles from '../sass/results-container.module.scss';

const Results = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)

export default Results;