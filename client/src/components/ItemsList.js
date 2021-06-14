import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import useFetchItems from '../hooks/use-fetch-items';
import {getQueryStringParam} from '../utils.js';
import Breadcrumb from './Breadcrumb';
import Item from './Item';
import styles from '../sass/items-list.module.scss';

const ItemsList = () => {
    const {fetchItems, response, error, loading} = useFetchItems();
    const search = getQueryStringParam(useLocation(), 'search');

    useEffect(() => fetchItems(search), [search]);
    if (!response.items) return null;
    return (
        <div className={styles.container}>
            <Breadcrumb/>
            <div className={styles.results}>
                {response.items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}
export default ItemsList;


