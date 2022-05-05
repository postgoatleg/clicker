import React from 'react';
import styles from './styles/shopElement.module.css'
import PropTypes from "prop-types";


const ShopElement = ({title, cost, boost, setPowerClick, powerClick, clickCount, setClickCount}) => {
    const buyButton = () => {
        if(cost < clickCount) {
            setPowerClick(powerClick+boost);
            setClickCount(clickCount-cost);
        }
        else alert("You haven't enough money!");
    }
    return (
        <div className={styles.shopElement} onClick={buyButton}>
            <h2>{title}</h2>
            <p>Power - {boost}</p>
            <p> COST: {cost}</p>
        </div>
    );
};

ShopElement.propTypes = {
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    boost: PropTypes.number.isRequired,
    powerClick: PropTypes.number.isRequired,
    setPowerClick: PropTypes.func.isRequired,
    clickCount: PropTypes.number.isRequired,
    setClickCount: PropTypes.number.isRequired,

}

export default ShopElement;