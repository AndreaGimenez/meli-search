import React from "react";
import {productDescription, itemCondition, buttonLabel} from "../../constants";
import Price from "../price";
import Button from "../button";

import styles from "./styles.module.scss";


const ItemInformation = ({item, description}) => (
    <div className={styles.box}>
        <Left
            {...item}
            description={description}
        />
        <Right {...item}/>
    </div>
);

const Left = ({picture, title, description}) => (
    <div className={styles.columnLeft}>
        <LeftImage picture={picture} title={title} />
        {description && (
            <LeftDescription description={description} />
        )}
    </div>
);

const LeftImage = ({picture, title}) => (
    <div className={styles.image}>
        <img src={picture} alt={`${title}`}/>
    </div>
);

const LeftDescription = ({description}) => (
    <div className={styles.description}>
        <h2 className={styles.title}>{productDescription}</h2>
        <p className={styles.text}>{description}</p> 
    </div>
);

const displayDecimals = (decimals) => <span className={styles.decimals}>{decimals}</span>

const Right = ({title, condition, price, soldQuantity}) => (
    <div className={styles.columnRight}>
        <RightHeader 
            condition={condition} 
            soldQuantity={soldQuantity} 
            title={title}
        />
        <Price
            amount={price.amount}
            decimals={price.decimals}
            displayDecimals={displayDecimals}
            currency={price.currency}
            size="xxl"
        />
        <div className={styles.button}>
            <Button label={buttonLabel.buy} />
        </div> 
    </div>
);

const RightHeader = ({condition, soldQuantity, title}) => (
    <div>
        <h5 className={styles.subtitle}>
            <span>{itemCondition[condition]}</span> - <span>{soldQuantity}</span> vendidos
        </h5>
        <h2 className={styles.title}>{title}</h2>
    </div>
);

export default ItemInformation;
