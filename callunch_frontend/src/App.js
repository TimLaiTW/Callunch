import React, { Component } from 'react';
import './App.css';
import CompleteBtnGroup from './components/CompleteBtnGroup';
import RenderOrders from './components/RenderOrders';
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

  displayCompleted = status => {
    this.setState({
      viewCompleted: status
    });
  }

  render(){
    return (
      <div>
        <h1>Order Lists</h1>
        <CompleteBtnGroup 
          displayCompleted={this.displayCompleted}/>
        <RenderOrders 
          viewCompleted={this.state.viewCompleted}
          orderList={this.state.orderList}/>
      </div>
    )
  }
}