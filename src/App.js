import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Message from './component/Message/Message';
import TextArea from './component/TextArea/TextArea';
import './global.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Message/>
     <TextArea/>  
     <Footer/>
   </div>
  );
}

export default App;
