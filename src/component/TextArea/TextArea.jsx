// src/component/TextArea/TextArea.jsx
import React, { useState, useEffect, useRef } from 'react';
import './TextArea.css';
import { IoMdSend } from "react-icons/io";

const TextArea = ({ sendMessage }) => {
  const [content, setContent] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSend = () => {
    if (content.trim()) {
      sendMessage(content);
      setContent('');
    }
  };

  return (
    <div className="textarea__container">
      <div className='textarea__box'>
        <textarea
          ref={textAreaRef}
          type="text"
          placeholder="Enter your message"
          className='textarea__input'
          rows={1}
          value={content}
          onChange={handleChange}
        ></textarea>
        <button className='textarea__btn' onClick={handleSend}>
          <IoMdSend className='textarea__sendicon' />
        </button>
      </div>
    </div>
  );
};

export default TextArea;