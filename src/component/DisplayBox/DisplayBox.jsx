import React from 'react';
import './DisplayBox.css';

const DisplayBox = () => {
  return (
    <div className='displaybox__container'>
        <div className='displaybox__sendermessage'>Hello World from Sender</div>
        <div className='displaybox__recievermessage'>Hello World from Reciever</div>
    </div>
  )
}

export default DisplayBox;