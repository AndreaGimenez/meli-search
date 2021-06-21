import useFetch from "./use-fetch";
import {BASE_URL} from "../constants.js";

const useFetchItem = (id) => {
    const {response, error, loading} = useFetch(`${BASE_URL}/${id}`);

    return {
        response,
        error,
        loading
    };
}

export default useFetchItem;
