import React from 'react'

function ErrMsg({ msg }) {
  return (
    <div className="errMsg">
      <i className="fas fa-exclamation-circle"></i><span>{msg}</span>
    </div>
  )
}

export default ErrMsg
