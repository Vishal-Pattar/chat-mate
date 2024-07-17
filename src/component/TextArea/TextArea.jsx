import React from 'react'
import './TextArea.css'
import { IoMdSend } from "react-icons/io";
const TextArea = () => {
  return (
    <div className="textarea__container">
      <input type="text" placeholder="Enter your message" className='textarea__input' />
      <button className='textarea__btn'>
      <IoMdSend />
      </button>
    </div>
  )
}

export default TextArea
