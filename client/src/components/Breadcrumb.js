import styles from "../sass/breadcrumb.module.scss";

const Breadcrumb = ({categories}) => (
    <div className={styles.color}>
        {categories.map(category => <span key={category}>{category}<span>{'>'}</span></span>)}
    </div>
);


export default Breadcrumb;
