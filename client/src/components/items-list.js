import React from 'react';
import Breadcrumb from './breadcrumb';
import Item from './item';
import styles from '../sass/items-list.module.scss';

const ItemsList = ({items}) => {
    if (!items) return null;
    return (
        <div className={styles.container}>
            <Breadcrumb/>
            <div className={styles.results}>
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    )
}
export default ItemsList;


