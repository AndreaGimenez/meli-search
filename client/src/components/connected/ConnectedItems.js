import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import useFetchItems from "../../hooks/use-fetch-items";
import {getQueryStringParam} from "../../utils.js";
import ResultLayout from "../results/ResultLayout";
import List from "../results/List";

const ConnectedItems = () => {
    const {fetchItems, response, error, loading} = useFetchItems();
    const search = getQueryStringParam(useLocation(), "search");
    useEffect(() => fetchItems(search), [search]);

    if (!response.items) return null;

    return (
        <ResultLayout>
            <List data={response} />
        </ResultLayout>
    );
}

export default ConnectedItems;
