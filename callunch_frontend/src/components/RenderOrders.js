import React from 'react'

export default function RenderOrders(props) {
    const { orderList, viewCompleted } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    return filteredOrder.map(order => (
        <li
          key={ order.id }>
            <span>Name: { order.name } </span>
            <span>Order: { order.order }</span>
            <button onClick={()=>{props.DeleteOrder(order)}}>Delete</button>
          </li>
    ))
}
