import {currencySymbols} from "../constants";
import styles from "../sass/price.module.scss";


const Price = ({amount, currency, size="md"}) => {
    return (
        <div className={styles[`size-${size}`]}>
            {currencySymbols[currency]} {amount}
        </div>
    )

}

export default Price;