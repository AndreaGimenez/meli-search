import {currencySymbols} from "../constants";
import classNames from 'classnames';

import styles from "../sass/price.module.scss";


const Price = ({amount, decimals, currency, size="md"}) => (
    <div className={classNames(styles.price, styles[`size-${size}`])}>
            {currencySymbols[currency]} {amount}{decimals}
    </div>
);

export default Price;