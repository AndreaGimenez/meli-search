import React from "react";
import styles from "./styles.module.scss";

const Navbar = (props) => (
    <div className={styles.bar}>
        {props.children}
    </div>
);

export default Navbar;
