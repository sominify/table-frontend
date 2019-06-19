import React from 'react';
import './Order.css';

const Order = ({order}) => {
    return (
        <div className="order-menu">
            <span className="order-menu-name">{order.menu.name}</span>
            <span className="order-menu-count">{order.count}</span>
        </div>
    );
};

export default Order;