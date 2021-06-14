import {useCallback} from 'react';
import useFetch from './use-fetch';
import {BASE_URL} from '../constants.js';

const useFetchItems = () => {
    const {sendRequest, response, error, loading} = useFetch();

    const fetchItems = useCallback((q) => {
        const url = `${BASE_URL}?q=${q}`;
        sendRequest(url, 'GET'); 
    }, [sendRequest]);

    return {
        fetchItems,
        response,
        error,
        loading
    };
}

export default useFetchItems;