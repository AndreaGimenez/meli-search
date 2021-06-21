import React from "react";
import Breadcrumb from "../breadcrumb";
import styles from "./styles.module.scss";

const ResultLayout = (props) => (
    <div className={styles.container}>
        <Breadcrumb categories={props.categories} />
        <div className={styles.results}>
            {props.children}
        </div>
    </div>
);

export default ResultLayout;
