import React from "react";
import {Link} from "react-router-dom";
import Price from "../price";
import {item_description_url} from "../../constants";
import styles from "./styles.module.scss";


const ListItem = ({item}) => {
    const {picture, name, address} = item;
    
    return (
        <Link
        to={`${item_description_url}${item.id}`}
        className={styles.link}>
            <Card>
                <Image picture={picture} name={name}/>
                <ShortDescription item={item}/>
                <Address address={address} />
            </Card> 
    </Link>
    )
}

const Card = (props) => (
    <div className={styles.card}>
       {props.children}
    </div> 
);

const Image = ({picture, name}) => (
    <div className={styles.wrapper}>
        <img src={picture} alt={`${name}`} />
    </div>
)

const Address = ({address}) => <div className={styles.location}>{address.toLowerCase()}</div>

const displayDecimals = (decimals) => decimals !== "00" ? <span className={styles.decimals}>{decimals}</span> : null;

const ShortDescription = ({item}) => {
    const {price, free_shipping} = item;
    return (
        <div className={styles.description}>
            <div className={styles.container}>
                <ShortDescriptionTop {...price} free_shipping={free_shipping}/>
                <div className={styles.title}>
                    {item.title}
                </div>
            </div>
        </div>
    );
}

const ShortDescriptionTop = ({amount, currency, decimals, free_shipping}) => (
    <div className={styles.info}>
        <Price
            amount={amount}
            currency={currency}
            decimals={decimals}
            displayDecimals={displayDecimals}
            size="md"
            weight="light"
        />
        {free_shipping && <FreeShipping />}
    </div>
);

const FreeShipping = () => <div className={styles.icon} />

export default ListItem;
