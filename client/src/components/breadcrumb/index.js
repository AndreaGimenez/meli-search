import styles from "./styles.module.scss";

const Breadcrumb = ({categories}) => {
    const breadcrumb = categories.reduce((total, current) => total + current + " > ", "").slice(0,-2);
    return (
        <div className={styles.color}>
            {breadcrumb}
        </div>
    )
}



export default Breadcrumb;
