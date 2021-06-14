import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import useFetchProducts from '../hooks/use-fetch-products';
import {getQueryStringParam} from '../utils.js';
import ItemsList from './items-list';
import styles from '../sass/results-container.module.scss';

const ResultsContainer = () => {
    const {fetchProducts, response, error, loading} = useFetchProducts();
    const search = getQueryStringParam(useLocation(), 'search')

    useEffect(() => fetchProducts(search), [search]);
    
    return(
        <div className={styles.container}>
            <ItemsList items={response.items} />
        </div>
    )
}
export default ResultsContainer;