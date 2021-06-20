import React from "react";
import Breadcrumb from "../Breadcrumb";
import styles from "../../sass/layout.module.scss";

const ResultLayout = (props) => (
    <div className={styles.container}>
        <Breadcrumb categories={props.categories} />
        <div className={styles.results}>
            {props.children}
        </div>
    </div>
);

export default ResultLayout;
