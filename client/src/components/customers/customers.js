import React from 'react';
import './customers.css';

class Customers extends React.Component{
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }
    
    componentDidMount(){
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('fetched customers', customers)));
    }
    render(){
        return(
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map((customer) => {
                        return(
                            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Customers;