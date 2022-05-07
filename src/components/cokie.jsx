import React, {useContext} from 'react';
import styles from './styles/cokie.module.css'
import {GameContext} from "../gameСontext";
//import {useStateFromLocalStorage} from "../hooks/useStateFromLocalStorage";

const Cookie = () => {
    const {clickCount, setClickCount, powerClick} = useContext(GameContext);

    const addClick = () => {
        setClickCount(clickCount+powerClick);
    }

    return (
        <img src={"./img/factory.png"} className={styles.factory} onClick={addClick} alt="factory image"/>
        );
};

export default Cookie;