import React from 'react';
import styles from '../../sass/navbar.module.scss';

const Navbar = (props) => (
    <div className={styles.bar}>
        {props.children}
    </div>
)

export default Navbar;
