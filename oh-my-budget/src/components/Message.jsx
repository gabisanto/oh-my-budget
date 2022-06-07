import React from 'react'


//children brings the message, type the kind of msg either error or success
const Message = ({children, type}) => {
  return (
    <div className={`alerta ${type}`}>
      {children}
    </div>
  )
}

export default Message
