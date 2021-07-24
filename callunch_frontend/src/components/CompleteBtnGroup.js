import React from 'react'
export default function CompleteBtnGroup(props) {
    return (
        <div>
          <button 
            onClick={() => props.displayCompleted(true)}>Complete
          </button>
          <button 
            onClick={() => props.displayCompleted(false)}>Incomplete
          </button>
        </div>
    )
}
