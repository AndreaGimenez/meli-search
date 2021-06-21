import useFetch from "./use-fetch";
import {BASE_URL} from "../constants.js";

const useFetchItems = (q) => {
    const {response, error, loading} = useFetch(`${BASE_URL}?q=${q}`);

    return {
        response,
        error,
        loading
    };
}

export default useFetchItems;
