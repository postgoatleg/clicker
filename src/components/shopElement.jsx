import React, {useState, useCallback, useContext, useEffect} from 'react';
import styles from './styles/shopElement.module.css'
import PropTypes from "prop-types";
import {GameContext} from "../gameСontext";

const intervalTimeout = 250

const ShopElement = ({title, cost, boost}) => {
    const [isBuyingInProgress, setIsBuyingInProgress] = useState(false);
    const {clickCount, setClickCount, setPowerClick} = useContext(GameContext);

    const buy = useCallback(() => {
        if (cost <= clickCount) {
            setPowerClick(prev => prev + boost);
            setClickCount(prev => prev - cost);
        } else {
            alert("You haven't enough money!")
            stopBuying()
        }
    }, [cost, clickCount, setClickCount, setPowerClick]);

    const startBuying = () => {
        setIsBuyingInProgress(true)
        buy();
    };

    const stopBuying = () => {
        setIsBuyingInProgress(false)
    };

    useEffect(() => {
        if (isBuyingInProgress) {
            const timeoutId = setTimeout(buy, intervalTimeout)
            window.addEventListener('mouseup', stopBuying)

            return () => {
                clearTimeout(timeoutId)
                window.removeEventListener('mouseup', stopBuying)
            }
        }
    },[buy, isBuyingInProgress])


    return (
        <div className={styles.shopElement} onMouseDown={startBuying}>
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
}

export default ShopElement;