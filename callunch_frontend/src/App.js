import React, { Component } from 'react';
import './App.css';
import CompleteBtnGroup from './components/CompleteBtnGroup';
import RenderOrders from './components/RenderOrders';
import NewOrderForm from './components/NewOrderForm';
import Title from './components/Title';
import axios from "axios";
export default class App extends Component{
  constructor(){
    super();
    this.state = {
      viewCompleted: false,
      viewAddOrder: false,
      orderList: [],
    };
    this.displayCompleted = this.displayCompleted.bind(this);
    this.viewNewOrderForm = this.viewNewOrderForm.bind(this);
  }

  async componentDidMount() {
    try {
      const result = await fetch("http://localhost:8000/api/orders/");
      const orderList = await result.json();
      this.setState({
        orderList
      });
    } catch(e) {
      console.log(e);
    }
  }

  displayCompleted(status){
    this.setState({
      viewCompleted: status
    });
  }

  viewNewOrderForm(){
    this.setState({
      viewAddOrder: !this.state.viewAddOrder
    });
  }

  AddNewOrder = order => {
    this.viewNewOrderForm();
    if (order.id) {
      axios
        .put(`http://localhost:8000/api/orders/${order.id}/`, order)
      return;  
    }
    axios
      .post("http://localhost:8000/api/orders/", order)
  };

  DeleteOrder = order => {
    if(order.id) {
      axios.delete(`http://localhost:8000/api/orders/${order.id}`);
    }
  }

  // EditOrder = order => {
  //   if(order.id) {
  //     axios.put(`http://localhost:8000/api/orders/${order.id}/`, order)
  //   }
  // }

  createOrder = () => {
    this.setState({
      viewAddOrder: !this.state.viewAddOrder
    });
  }
  
  render(){
    const { viewCompleted, viewAddOrder, orderList } = this.state;
    return (
      <div>
        <Title />
        <div className="manage_order_button_group">
          <button className="add_new_order_btn" onClick={this.createOrder}>Add new orders</button>
          <CompleteBtnGroup 
            displayCompleted={this.displayCompleted}/>
        </div>
        <div>
        <RenderOrders 
          viewCompleted={viewCompleted}
          orderList={orderList}
          DeleteOrder={this.DeleteOrder}/>
        </div>
        { viewAddOrder ? 
          <NewOrderForm 
            onSubmit={this.AddNewOrder}/>
          : null
        }
      </div>
    )
  }
}