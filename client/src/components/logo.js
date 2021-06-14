import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../sass/logo.module.scss';


const Logo = () => <Link to= '/' className={styles.logo}/>

export default Logo;
