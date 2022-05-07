import React, {useState, useCallback, useContext, useEffect} from 'react';
import styles from './styles/shopElement.module.css'
import PropTypes from "prop-types";
import {GameContext} from "../gameСontext";

const intervalTimeout = 150

const ShopElement = ({title, cost, boost, type}) => {
    const [isBuyingInProgress, setIsBuyingInProgress] = useState(false);
    const {clickCount, setClickCount, setPowerClick, setAutoClickPower, autoClickPower} = useContext(GameContext);

    const buy = useCallback(() => {
        if (cost <= clickCount && type === "manual") {
            setPowerClick(prev => prev + boost);
            setClickCount(prev => prev - cost);
        }
        else if (cost <= clickCount && type === "auto") {
            setAutoClickPower(prev => prev + boost);
            setClickCount(prev => prev - cost);
        } else {
            alert("You haven't enough money!")
            stopBuying()
        }
    }, [cost, clickCount, setClickCount, setPowerClick, setPowerClick]);

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

    const autoClick = useCallback(() => {
        if(autoClickPower !== 0)
            setClickCount(prev => prev + autoClickPower)
    }, [cost, clickCount, setClickCount, setPowerClick, setPowerClick]);

    useEffect(() => {
            const timeoutAutoClickId = setTimeout(autoClick, 1000)
            return () => {
        clearTimeout(timeoutAutoClickId)
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
    type: PropTypes.string.isRequired,
}

export default ShopElement;