import React from 'react';
import {productDescription, itemCondition} from "../../constants";
import Price from '../Price';

import styles from "../../sass/item-information.module.scss";


const ItemInformation = ({data}) => {
    const {item, description} = data;
    const {picture, title, condition, price, sold_quantity} = item;

    return (
        <div className={styles.container}>
            <Left 
                picture={picture} 
                title={title} 
                description={description}
            />
            <Right 
                title={title} 
                condition={condition}
                price={price}
                soldQuantity={sold_quantity}
            />
        </div>
    )
};

const Left = ({picture, title, description}) => {
    return(<div className={styles.columnLeft}>
        <div className={styles.image}>
            <img src={picture} alt={`${title}`}/>
        </div>
        <div className={styles.description}>
            <h2 className={styles.title}>{productDescription}</h2>
            <p className={styles.text}>{description}</p>
        </div>
    </div>)
}

const Right = ({title, condition, price, soldQuantity}) => {
    return (
        <div className={styles.columnRight}>
            <div>
                <div className={styles.subtitle}>
                    <span>{itemCondition[condition]}</span> - <span>{soldQuantity}</span> vendidos
                </div>
                <div className={styles.title}>{title}</div>
            </div>
            <Price 
                amount={price.amount}
                currency={price.currency}
                size="xl"
            />
        </div>
    )
}


export default ItemInformation;