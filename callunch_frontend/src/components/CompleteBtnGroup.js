import React from 'react';
export default function CompleteBtnGroup(props) {
    return (
        <div className="complete_btn_group">
          <button 
            onClick={() => props.viewCompletedList(true)}>Complete
          </button>
          <button 
            onClick={() => props.viewCompletedList(false)}>Incomplete
          </button>
        </div>
    )
}
