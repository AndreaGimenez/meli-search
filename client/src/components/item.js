import React from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import {item_description_url} from '../constants';
import styles from '../sass/item.module.scss';

const Item = ({item}) => (
    <Link 
        to={`${item_description_url}${item.id}`}
        className={styles.link}>
        <Card>     
            <div className={styles.wrapper}>
                <img src={item.picture} alt={`${item.name}`} />
            </div>
            <ItemDescription item={item}/>
            <div className={styles.location}>{item.address.toLowerCase()}</div>
        </Card>
    </Link>
);

const ItemDescription = ({item}) => (
    <div className={styles.description}>
        <div className={styles.container}>
            <div className={styles.price}>
                <span>$ </span>{item.price.amount}
            </div>
            <div className={styles.title}>
                {item.title}
            </div>
        </div>
    </div>
)


export default Item;