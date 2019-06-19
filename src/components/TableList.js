import React, { Component } from 'react';
import './TableList.css';
import Table from './Table';

export default class TableList extends Component {
  render() {
    const tableData = this.props.tableData
    return (
      <div className="table-list">
        {tableData.map(table => {
          return <Table key={table.id} table={table} />
        })}
      </div>
    )
  }
};
