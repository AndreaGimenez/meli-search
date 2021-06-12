import {useCallback} from 'react';
import useFetch from '../hooks/use-fetch';
import {BASE_URL} from '../constants.js';

const useFetchProducts = () => {
    const {sendRequest, response, error, loading} = useFetch();

    const fetchProducts = useCallback((q) => {
        const url = `${BASE_URL}?q=${q}`;
        sendRequest(url, 'GET'); 
    }, [sendRequest]);
    
    return {
        fetchProducts,
        response,
        error,
        loading
    };
}

export default useFetchProducts;