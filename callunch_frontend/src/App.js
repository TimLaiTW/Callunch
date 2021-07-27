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
      ModifiedOrder: false,
      orderList: [],
    };
    this.apiUrl = "http://localhost:8000/api/orders/";
    this.viewCompletedList = this.viewCompletedList.bind(this);
    this.viewNewOrderForm = this.viewNewOrderForm.bind(this);
  }

  componentDidMount() {
    console.log('did mount')
    this.mounted = true;
    try {
      this.fetchData();
    } catch(e) {
      console.log(e);
    }
  }

  async fetchData() {
    fetch(this.apiUrl)
    .then(response => response.json())
    .then((orderList) => {
      if(this.mounted){
        this.setState({orderList})
      }
    });
    console.log('fetch data')
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  viewCompletedList(status){
    this.setState({
      viewCompleted: status
    });
  }

  viewNewOrderForm() {
    this.setState({
      viewAddOrder: !this.state.viewAddOrder
    });
    console.log('new order form ')
  }

  AddNewOrder = order => {
    this.viewNewOrderForm();
    if (order.id) {
      axios
        .put(this.apiUrl + `${order.id}/`, order)
    }
    else{
      axios
        .post(this.apiUrl, order);
    }
    this.setState({ModifiedOrder: true});
    console.log('added new order')
  };

  DeleteOrder = order => {
    if(order.id) {
      axios.delete(this.apiUrl + `${order.id}`);
      this.setState({ModifiedOrder: true});
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.ModifiedOrder !== this.state.ModifiedOrder){
      console.log('component did update')
      this.fetchData();
      this.setState({ModifiedOrder: false});
    }
  }

  // EditOrder = order => {
  //   if(order.id) {
  //     axios.put(`http://localhost:8000/api/orders/${order.id}/`, order)
  //   }
  // }
  
  render(){
    const { viewCompleted, viewAddOrder, orderList } = this.state;
    console.log(orderList);
    return (
      <div>
        <Title />
        <div className="manage_order_button_group">
          <button className="add_new_order_btn" onClick={this.viewNewOrderForm}>Add new orders</button>
          <CompleteBtnGroup 
            viewCompletedList={this.viewCompletedList}/>
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