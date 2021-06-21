import React from "react";

import styles from "./styles.module.scss";

export const Button = ({label}) => (
    <button
        className={styles.button}>
        {label}
    </button>
);

export default Button;
