import React from 'react';
import PropTypes from 'prop-types';
import * as uuid from 'uuid';
import ShopElement from "./shopElement";

const Shop = ({setPowerClick, powerClick, clickCount, setClickCount}) => {
    const initialValue = [
        {title: 'test', cost: 20, boost: 1,  id: uuid.v4()},
        {title: 'test2', cost: 30, boost: 2,  id: uuid.v4()}
    ]


    return (
        <div>
            {initialValue.map(elem =>
                <ShopElement
                    title={elem.title}
                    cost={elem.cost}
                    boost={elem.boost}
                    key={elem.id}
                    setPowerClick={setPowerClick}
                    powerClick={powerClick}
                    clickCount={clickCount}
                    setClickCount={setClickCount}
                />)}
        </div>
    );
};

Shop.propTypes = {
    setPowerClick: PropTypes.func.isRequired,
    powerClick: PropTypes.number.isRequired,
    clickCount: PropTypes.number.isRequired,
    setClickCount: PropTypes.func.isRequired,
}

export default Shop;