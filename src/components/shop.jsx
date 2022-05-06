import React from 'react';
import * as uuid from 'uuid';
import ShopElement from "./shopElement";

const initialValue = [
    {title: 'test', cost: 20, boost: 1,  id: uuid.v4()},
    {title: 'test2', cost: 30, boost: 2,  id: uuid.v4()}
]

const Shop = () => {
    return (
        <div>
            {initialValue.map(elem =>
                <ShopElement
                    title={elem.title}
                    cost={elem.cost}
                    boost={elem.boost}
                    key={elem.id}
                />)}
        </div>
    );
};

export default Shop;