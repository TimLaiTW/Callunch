import React from 'react'
export default function RenderOrders(props) {
    const { orderList, viewCompleted } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    return filteredOrder.map(order => (
      <li key={ order.id }>
        <span>{ order.name }</span>
        <span>{ order.order }</span>
        <button 
          className="delete-btn" 
          onClick={()=>{props.DeleteOrder(order)}}>
            Delete
        </button>
      </li>
      ))
}
