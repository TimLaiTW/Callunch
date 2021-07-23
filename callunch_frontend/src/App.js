import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      viewCompleted: false,
      newOrder: {
        'name': '',
        'order': '',
        completed: false
      },
      orderList: [],
    };
  }

  async componentDidMount() {
    try {
      const result = await fetch('http://localhost:8000/api/orders/');
      const orderList = await result.json();
      this.setState({
        orderList
      });
    } catch(e) {
      console.log(e);
    }
  }

  renderOrders = () => {
    const { orderList, viewCompleted } = this.state;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    
    return filteredOrder.map(order => (
      <li
        key={ order.id }>
          <span>{ order.name }: { order.order }</span>
        </li>
    ))
  }

  render(){
    return (
      <div>
        <h1>Order Lists</h1>
        { this.renderOrders() }
      </div>
    )
  }

}