import React from 'react';

function Notification({ message, updateMessage }) {
  const notifStyle = {
    background: 'lightgrey',
    fontSize: 20 + 'px',
    borderStyle: 'solid',
    borderRadius: 5 + 'px',
    padding: 10 + 'px',
    marginBottom: 10 + 'px'
  };
  const error = { ...notifStyle, color: 'red' };
  const success = { ...notifStyle, color: 'green' };
  if (message === null) return null;
  else {
    setTimeout(() => updateMessage(null), 5000);
    return (
      <div style={message.success ? success : error}>
        {message.note}
      </div>);
  }
}

export default Notification