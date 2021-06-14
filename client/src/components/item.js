import React from 'react';

import styles from '../sass/item.module.scss';

const Item = ({item}) => (
    <div className={styles.wrapper}>
        <div className={styles.card}>     
            <div>
                <img src={item.picture}/>
            </div>
            <div className={styles.description}>descripcion</div>
            <div className={styles.location}>lugar</div>
        </div>
    </div>
)
export default Item;