import './Table.css';
import OrderList from './OrderList';
import axios from 'axios';
import React, { Component } from 'react';

class Table extends Component {
    state = {
        orderList: []
    }

    componentDidMount() {
        const self = this;
        axios.get('/api/order', {
                params: {
                    table_id: this.props.table.table_no
                }
            })
            .then(function (response) {
                console.log(response);
                if(response.data == "") {
                    self.setState({
                        orderList: []
                    })
                } else {
                    self.setState({
                      orderList: response.data
                    })
                }
            })
            .catch(function (error) {

            });
    }

    handleUpdate = () => {
        if(this.state.orderList.length == 0) {
            console.log('empty');
        } else {
            axios.put(`/api/order/${this.state.orderList[0].fk_order_id}`)
            .then(((response) => {
                console.log(response);
                this.setState({
                    orderList: []
                })
            }))
        }
    }

    render() {
        const { table } = this.props;
        return (
            <div className="table">
                <div className="table-header">
                    <span className="table-header-name">{table.table_no + "번 테이블"}</span>
                    <button className="success-button" onClick={this.handleUpdate}>완료</button>
                </div>
                <div className="divider"></div>
                <OrderList table={table} orderList={this.state.orderList} />
            </div>
        );
    }
}

export default Table;