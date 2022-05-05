import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/cokie.module.css'
//import {useStateFromLocalStorage} from "../hooks/useStateFromLocalStorage";

const Cookie = ({setClickCount, clickCount, powerClick}) => {

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