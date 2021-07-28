import React from 'react';
export default function CompleteBtnGroup(props) {
    return (
      <>
        <button 
          className="show_complete_btn"
          onClick={() => props.viewCompletedList(true)}>
            Complete
        </button>
        <button 
          className="show_complete_btn"
          onClick={() => props.viewCompletedList(false)}>
            Incomplete
        </button>
        <button 
          className="add_new_order_btn" 
          onClick={props.viewNewOrderForm}>
            Add new orders
        </button>
      </>
    )
}
