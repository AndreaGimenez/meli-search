import React from "react";
import {Link} from "react-router-dom";
import Card from "../card";
import Price from "../price";
import {item_description_url} from "../../constants";
import styles from "./styles.module.scss";

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

const displayDecimals = (decimals) => decimals !== "00" ? <span className={styles.decimals}>{decimals}</span> : null;

const ShortDescription = ({item}) => (
    <div className={styles.description}>
        <div className={styles.container}>
            <div className={styles.info}>
                <Price
                    amount={item.price.amount}
                    currency={item.price.currency}
                    decimals={item.price.decimals}
                    displayDecimals={displayDecimals}
                    size="md"
                    weight="light"
                />
                {item.free_shipping && <FreeShipping />}
            </div>
            <div className={styles.title}>
                {item.title}
            </div>
        </div>
    </div>
);

const FreeShipping = () => <div className={styles.icon} />

export default ListItem;