import React, { Component } from 'react';
import './App.css';
import MainBtnGroup from './components/MainBtnGroup';
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
  };

  DeleteOrder = order => {
    if(order.id) {
      axios.delete(this.apiUrl + `${order.id}`);
      this.setState({ModifiedOrder: true});
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.ModifiedOrder !== this.state.ModifiedOrder){
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
    return (
      <div>
        <Title />
        <div className="manage_button_group">
          <MainBtnGroup 
            viewCompletedList={this.viewCompletedList}
            viewNewOrderForm={this.viewNewOrderForm}/>
        </div>
        { viewAddOrder ? 
          <NewOrderForm 
            onSubmit={this.AddNewOrder}/>
          : null
        }
        <RenderOrders 
          viewCompleted={viewCompleted}
          orderList={orderList}
          DeleteOrder={this.DeleteOrder}/>
        
      </div>
    )
  }
}