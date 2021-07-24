import React from 'react'

export default function RenderOrders(props) {
    const { orderList, viewCompleted } = props;
    const filteredOrder = orderList.filter(
      order => order.completed === viewCompleted
    );
    return filteredOrder.map(order => (
        <li
          key={ order.id }>
            <span>{ order.name }: { order.order }: { order.completed }</span>
          </li>
    ))
}
