import React from "react";
import styles from "./styles.module.scss";

const Results = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
);

export default Results;
