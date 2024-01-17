import logo from './logo.svg';
import './App.css';
import User from './User'
import User1 from './User1'
function App() {
  function Apple(){
    return(<h1>Hello from apple</h1>)
  }

  return (
    <div className="App">
     <h1>Hello World !</h1>
      <User></User>
     <User1 />
     <Apple/>
     

    </div>
  );
}



export default App;