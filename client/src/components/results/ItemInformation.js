import React from 'react';
import {productDescription, itemCondition, buttonLabel} from "../../constants";
import Price from '../Price';
import Button from '../Button';

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
                <h5 className={styles.subtitle}>
                    <span>{itemCondition[condition]}</span> - <span>{soldQuantity}</span> vendidos
                </h5>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <Price 
                amount={price.amount}
                currency={price.currency}
                size="xxl"
            />
            <div className={styles.button}>
                <Button label={buttonLabel.buy} />
            </div>
        </div>
    )
}


export default ItemInformation;