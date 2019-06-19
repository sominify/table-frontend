import React, { Component } from 'react';
import Header from './components/Header';
import TableList from './components/TableList';
import axios from 'axios';

class App extends Component {

    state = {
      tableData: []
    }

    componentDidMount() {
        const self = this;
        axios.get('/api/table')
            .then(function (response) {
                self.setState({
                  tableData: response.data
                })
            })
            .catch(function (error) {

            });
    }

    render() {
        return (
            <div>
                <Header />
                <TableList tableData={this.state.tableData} />
            </div>
        )
    }
};

export default App;