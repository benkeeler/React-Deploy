import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
const [counter, setCounter] = useState(0)


  return (
    <div className="">

  <button onClick={()=>setCounter(counter + 1)}>this button is functionally pointless now!
  </button>  
    
  <Calculator>

  </Calculator>  
    </div>
  );
}

export default App;
