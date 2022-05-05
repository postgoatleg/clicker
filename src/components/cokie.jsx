import React from 'react';
import styles from './styles/cokie.module.css'

const Cookie = ({setClickCount, clickCount}) => {

    const addClick = () => {
        setClickCount(clickCount+1);
    }

    return (
        <img src="./img/factory.png" className={styles.factory} onClick={addClick} />
        );
};

export default Cookie;