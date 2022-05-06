import React, {useContext} from 'react';
import PropTypes from 'prop-types';
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

Cookie.propTypes = {
    powerClick: PropTypes.number.isRequired,
    setClickCount: PropTypes.func.isRequired,
    clickCount: PropTypes.number.isRequired
}

export default Cookie;