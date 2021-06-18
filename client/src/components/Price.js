import {currencySymbols} from "../constants";
import classNames from "classnames";

import styles from "../sass/price.module.scss";


const Price = ({amount, decimals="00", currency, size="md", weight="bold", displayDecimals}) => (
    <div className={classNames(styles.root, styles[`size-${weight}`], styles[`size-${size}`])}>
        {currencySymbols[currency]} {amount} {displayDecimals(decimals)}
    </div>
);


export default Price;
