import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import useFetchProducts from '../hooks/use-fetch-products';
import {getQueryStringParam} from '../utils.js';

const SearchResults = () => {
    const {fetchProducts, response, error, loading} = useFetchProducts();
    const search = getQueryStringParam(useLocation(), 'search')

    useEffect(() => fetchProducts(search), [search]);
    console.log(response)
    return(
        <div>SearchResults</div>
    )
}
export default SearchResults;