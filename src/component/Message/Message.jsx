import React from 'react';
import './Message.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Message = () => {
  return (
    <div className='message__container'>
      <div className='message__box'>
        <div className='message__reciever user_message'>
          <div>
            Hi there! How are you?
          </div>
        </div>
        <div className='message__sender user_message'>
          <div>
            I'm good, thanks! How about you?
            <span className='user_message_div_bottom'>5:31 PM <IoCheckmarkDoneSharp className='double_tick' /></span>
          </div>
        </div>
        <div className='message__reciever user_message'>
          <div>
            Doing well, just working on a project.
          </div>
        </div>
        <div className='message__sender user_message'>
          <div>
            That sounds interesting! What kind of project?
            <span className='user_message_div_bottom'>5:33 PM <IoCheckmarkDoneSharp className='double_tick' /></span>
          </div>
        </div>
        <div className='message__reciever user_message'>
          <div>
            It's an AI-powered chat application.
          </div>
        </div>
        <div className='message__sender user_message'>
          <div>
            Wow, that sounds cool! Good luck with it.
            <span className='user_message_div_bottom'>5:35 PM <IoCheckmarkDoneSharp className='double_tick' /></span>
          </div>
        </div>
        <div className='message__reciever user_message'>
          <div>
            Thanks! Have a great day.
          </div>
        </div>
        <div className='message__sender user_message'>
          <div>
            You too!
            <span className='user_message_div_bottom'>5:37 PM <IoCheckmarkDoneSharp className='double_tick' /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;