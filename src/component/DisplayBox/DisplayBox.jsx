import React from 'react';
import './DisplayBox.css';

const DisplayBox = () => {
  return (
    <div className='displaybox__container'>
      <div className='displaybox__message '>
        <div className='displaybox__sendermessage  usermessage'>Hello World from Sender</div>
        <div className='displaybox__recievermessage usermessage'>Hello World from Reciever</div>
      </div>
    </div>
  )
}

export default DisplayBox;