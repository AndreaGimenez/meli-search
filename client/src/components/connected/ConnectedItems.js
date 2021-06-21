import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import useFetchItems from "../../hooks/use-fetch-items";
import {getQueryStringParam} from "../../utils.js";
import ResultLayout from "../result-layout";
import List from "../list";

const ConnectedItems = () => {
    const {fetchItems, response} = useFetchItems();
    const search = getQueryStringParam(useLocation(), "search");
    useEffect(() => fetchItems(search), [search]); //## por que fetch diferido?
    const {items, categories} = response;

    if (!items) return null;

    return (
        <ResultLayout  categories={categories}>
            <List items={items} /> 
        </ResultLayout>
    );
}

export default ConnectedItems;
