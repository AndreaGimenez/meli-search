import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../Card';
import Price from '../Price';
import {item_description_url} from '../../constants';
import styles from '../../sass/list-item.module.scss';

const ListItem = ({item}) => (
    <Link 
        to={`${item_description_url}${item.id}`}
        className={styles.link}>
        <Card>     
            <div className={styles.wrapper}>
                <img src={item.picture} alt={`${item.name}`} />
            </div>
            <ShortDescription item={item}/>
            <div className={styles.location}>{item.address.toLowerCase()}</div>
        </Card>
    </Link>
);

const ShortDescription = ({item}) => (
    <div className={styles.description}>
        <div className={styles.container}>
            <Price 
                amount={item.price.amount}
                currency={item.price.currency}
                size="md"
            />
            <div className={styles.title}>
                {item.title}
            </div>
        </div>
    </div>
)


export default ListItem;