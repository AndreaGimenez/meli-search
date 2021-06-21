import React from "react";
import SearchForm from "../form";
import Logo from "../logo";
import Navbar from "../navbar";

import styles from "./styles.module.scss";


const Header = () => (
    <header className={styles.header}>
        <Navbar>
            <Logo />
            <SearchForm />
        </Navbar>
    </header>
);

export default Header;
