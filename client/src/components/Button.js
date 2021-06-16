import React from 'react';

import styles from "../sass/button.module.scss";

export const Button = ({label, color}) => {
    return (
        <button
            className={styles.button}>
            {label}
        </button>
    )
}

export default Button;