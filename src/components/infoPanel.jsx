import React, {useContext} from 'react';
import {GameContext} from "../gameСontext";

const InfoPanel = () => {
    const {clickCount, powerClick, autoClickPower} = useContext(GameContext);
    return (
        <div>
            <h1>Clicks number: {clickCount}</h1>
            <h1>Power of your click: {powerClick}</h1>
            <h2>Automatic click power - {autoClickPower} per second</h2>
        </div>
    );
};

export default InfoPanel;