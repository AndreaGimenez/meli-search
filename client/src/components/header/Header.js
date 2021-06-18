import React from "react";
import SearchForm from "../form/SearchForm";
import Logo from "./Logo";
import Navbar from "./Navbar";

import styles from "../../sass/header.module.scss";


const Header = () => (
    <header className={styles.header}>
        <Navbar>
            <Logo />
            <SearchForm />
        </Navbar>
    </header>
);

export default Header;
