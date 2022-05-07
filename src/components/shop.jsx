import React from 'react';
import * as uuid from 'uuid';
import ShopElement from "./shopElement";
import styles from "./styles/shop.module.css"

const initialValue = [
    {title: 'test', cost: 20, boost: 1,  id: uuid.v4(), type: "manual"},
    {title: 'test2', cost: 30, boost: 2,  id: uuid.v4(), type: "manual"},
    {title: 'test3', cost: 100, boost: 1, id: uuid.v4(), type: "auto"},
    {title: 'test4', cost: 250, boost: 3, id: uuid.v4(), type: "auto"}
]

const Shop = () => {
    return (
        <div>
            <h2>Shop:</h2>
        <div className={styles.shopParentDiv}>
            {initialValue.map(elem =>
                <ShopElement
                    title={elem.title}
                    cost={elem.cost}
                    boost={elem.boost}
                    key={elem.id}
                    type={elem.type}
                />)}
        </div>
        </div>
    );
};

export default Shop;