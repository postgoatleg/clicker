import React from 'react'
import {useStateFromLocalStorage} from "./hooks/useStateFromLocalStorage";
import PropTypes from "prop-types";

const noFunction = () => {
    console.log('Not inserted function')
}

export const GameContext = React.createContext({
    clickCount: 0,
    powerClick: 0,
    autoClickPower: 0,
    setAutoClickPower: noFunction,
    setClickCount: noFunction,
    setPowerClick: noFunction,
});

export const GameContextProvider = ({children = null}) => {
    const [clickCount, setClickCount] = useStateFromLocalStorage('clicksCounts', 0);
    const [powerClick, setPowerClick] = useStateFromLocalStorage('powerClick', 1);
    const [autoClickPower, setAutoClickPower] = useStateFromLocalStorage('autoClickPower', 0);

    return (
        <GameContext.Provider value={{clickCount, setClickCount, setPowerClick, powerClick, autoClickPower, setAutoClickPower}}>
            {children}
        </GameContext.Provider>
    )
}

GameContextProvider.propTypes = {
    children: PropTypes.node
}
