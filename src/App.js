import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Hello from './Components/Hello/hello';
import { useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false)
  const [fullname, setFullname] = useState('')
  return (
    <div>
      {logged ? '' : 
      <Login value_log={logged} setLogged={setLogged} value_name={fullname} setFullname={setFullname}/>}
      
      {logged ?  <Hello value_name={fullname} /> : '' }
    </div>
  );
}

export default App;
