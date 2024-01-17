import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
   //let data1 ="raj";
  var [data,setdata]=useState("raj1")
  function updateData()
  {
data="shubham";
    setdata(data)

  }
  console.warn("______");
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;