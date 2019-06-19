import './OrderList.css';
import Order from './Order';
import React, { Component } from 'react';

export default class OrderList extends Component {
    state = {
        orderList: []
    }

    render() {
        const { orderList } = this.props;
        return (
            <div className="order">
                {orderList.length !== 0 ? orderList.map(order => {
                    return <Order key={order.id} order={order} />
                }) : <div>주문내역이 없습니다.</div>}
            </div>
        )
    }
};