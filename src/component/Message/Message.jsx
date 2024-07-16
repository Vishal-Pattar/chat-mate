import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className='message__container'>
      <div className='message__box'>
        <div className='message__sender  user_message'>
          <div>Hello World from Sender</div>
        </div>
        <div className='message__reciever user_message'>
          <div>Hello World from Reciever</div>
        </div>
      </div>
    </div>
  )
}

export default Message;