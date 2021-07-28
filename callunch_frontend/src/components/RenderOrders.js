import React from 'react'
export default function RenderOrders(props) {
    const { orderList, viewCompleted } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    return (
      <div className="order-wrapper">
        {/* <span className="order-name">Name</span>
        <span className="order-detail">Detail</span> */}
        {filteredOrder.map(order => (
          <li key={ order.id }>
            <span className="order-name">{ order.name }</span>
            <span className="order-detail">{ order.order }</span>
            <button 
              className="order-delete-btn" 
              onClick={()=>{props.DeleteOrder(order)}}>
                Delete
            </button>
          </li>
        ))}
      </div>
    )
}
