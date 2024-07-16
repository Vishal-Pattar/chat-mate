import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import DisplayBox from './component/DisplayBox/DisplayBox';
import './global.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <DisplayBox/>  
     <Footer/>
   </div>
  );
}

export default App;
