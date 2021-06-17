import {currencySymbols} from "../constants";
import classNames from 'classnames';

import styles from "../sass/price.module.scss";


const Price = ({amount, decimals, currency, size="md", weight="bold"}) => (
    <div className={classNames(styles[`size-${weight}`], styles[`size-${size}`])}>
            {currencySymbols[currency]} {amount}{decimals}
    </div>
);

export default Price;