import React from 'react'
export default function RenderOrders(props) {
    const { orderList, viewCompleted, ButtonAction } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    const orderDetail = filteredOrder.map(order => (
      <tr className={`order-content ${viewCompleted}`} key={order.id}>
        <td className="order-name">{order.name}</td>
        <td className="order-detail">{order.order}</td>
        <td>
          <button 
            className="order-btn" 
            onClick={()=>{ButtonAction(order)}}>
              {props.text}
          </button>
        </td>
      </tr>
    ))
    const filteredOrderList = filteredOrder.length === 0 ? 
      null : 
      <table className="order-table">
          <thead className={`order-head ${viewCompleted}`}>
            <tr>
              <td className="order-header">Name</td>
              <td className="order-header">Order</td>
              <td className="order-header"></td>
            </tr>
          </thead>
        <tbody>
          {orderDetail}
        </tbody>
      </table>
    return (
      <>
        {filteredOrderList}
      </>
    )
}
