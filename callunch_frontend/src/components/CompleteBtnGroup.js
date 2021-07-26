import React from 'react';
export default function CompleteBtnGroup(props) {
    return (
        <div className="complete_btn_group">
          <button 
            onClick={() => props.displayCompleted(true)}>Complete
          </button>
          <button 
            onClick={() => props.displayCompleted(false)}>Incomplete
          </button>
        </div>
    )
}
