// import React,{useState} from 'react'
// import logo from './logo.svg';
// import './App.css';
// import Student from './Student'
// function App() {
//   const [name,setName]=useState("Anil")
//   function apple()
//   {
//     alert("hello")
//   }
//   return (
//     <div className="App">
//      <h1>Props in React :)</h1>
//      <Student name={name}/>
//      <button onClick={()=>{setName("Sidhu")}} >Update Name</button>
//     </div>
//   );
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';
// import React ,{useState}from 'react'
// function App() {
// const [data,setData]=useState(null)
// const [print,setPrint]=useState(false)

//   function getData(val)
//   {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
//      {
//        print?
//        <h1> {data}</h1>
//        :null
//      }
//     <input type="text" onChange={getData} />
//     <button onClick={()=>setPrint(true)} >Print Data</button>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react'
// function App() {
//   const [show,setShow]=useState(true)
//   return (
//     <div className="App">
//      {
//        show?<h1>Hello World !</h1>:null
//      }
//      <button onClick={()=>setShow(true)} >Show</button>
//      <button onClick={()=>setShow(false)} >Hide</button>
// <button onClick={()=>setShow(!show)} >Toggle</button> 
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import Student from './Student'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
  render()
  { 
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="anil@test.com"></Student>
       <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
      </div>
    );
  }
}

export default App;