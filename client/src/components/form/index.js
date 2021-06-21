import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {searchPlaceholder, results_url} from "../../constants.js";
import styles from "./styles.module.scss";


const SearchForm = () => {
    const [searchInput, setSearchInput] = useState("");
    const history = useHistory();

    const handleInputChanged = (event) => {
        setSearchInput(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        history.push(`${results_url}${searchInput}`);
    }

    return (
        <form
            onSubmit={onSubmit}
            className={styles.form}>
            <input
                className={styles.input}
                type="text"
                onChange={handleInputChanged}
                placeholder={searchPlaceholder}
            />
            <button
                type="submit"
                className={styles.button}>
                <SearchIcon />
            </button>
        </form>
    );
};

const SearchIcon = () => <div className={styles.icon}/>

export default SearchForm;
