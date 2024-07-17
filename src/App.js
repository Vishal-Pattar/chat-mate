// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Message from './component/Message/Message';
import TextArea from './component/TextArea/TextArea';
import './global.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [userId] = useState(uuidv4()); // Generate a unique user ID for the session

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const newMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } catch (error) {
        console.error('Error parsing message', error);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (content) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const message = {
        userId,
        content,
        type: 'sender',
        time: new Date().toLocaleTimeString(),
      };
      socket.send(JSON.stringify(message));
    }
  };

  return (
    <div className="App">
      <Header />
      <Message messages={messages} currentUserId={userId} />
      <TextArea sendMessage={sendMessage} />
      <Footer />
    </div>
  );
};

export default App;