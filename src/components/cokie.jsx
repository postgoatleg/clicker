import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/cokie.module.css'

const Cookie = ({setClickCount, clickCount}) => {

    const addClick = () => {
        setClickCount(clickCount+1);
    }

    return (
        <img src={"./img/factory.png"} className={styles.factory} onClick={addClick} alt="factory image"/>
        );
};

Cookie.propTypes = {
    setClickCount: PropTypes.func.isRequired,
    clickCount: PropTypes.number.isRequired
}

export default Cookie;