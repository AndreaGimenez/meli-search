import {useCallback} from "react";
import useFetch from "./use-fetch";
import {BASE_URL} from "../constants.js";

const useFetchItem = () => {
    const {sendRequest, response, error, loading} = useFetch();

    const fetchItemById = useCallback((q) => {
        const url = `${BASE_URL}/${q}`;
        sendRequest(url, "GET");
    }, [sendRequest]);

    return {
        fetchItemById,
        response,
        error,
        loading
    };
}

export default useFetchItem;
