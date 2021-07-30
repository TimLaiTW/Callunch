import React from 'react'
export default function RenderOrders(props) {
    const { orderList, viewCompleted } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    const orderDetail = filteredOrder.map(order => (
      <tr className="order-content" key={order.id}>
        <td className="order-name">{order.name}</td>
        <td className="order-detail">{order.order}</td>
        <td>
          <button 
            className="order-delete-btn" 
            onClick={()=>{props.DeleteOrder(order)}}>
              Delete
          </button>
        </td>
      </tr>
    ))
    return (
        <table className="order-table">
          <thead className="order-head">
            <td className="order-header">Name</td>
            <td className="order-header">Order</td>
            <td className="order-header"></td>
          </thead>
        <tbody>
          {orderDetail}
        </tbody>
      </table>
    )
}
