// src/component/Message/Message.jsx
import React from 'react';
import './Message.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Message = ({ messages, currentUserId }) => {
  return (
    <div className='message__container'>
      <div className='message__box'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message__${msg.userId === currentUserId ? 'sender' : 'reciever'} user_message`}
          >
            <div>
              {msg.content}
              {msg.userId === currentUserId && (
                <span className='user_message_div_bottom'>
                  {msg.time} <IoCheckmarkDoneSharp className='double_tick' />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;