import { Outlet, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Home">Home</Link> </li>
          <li>     <Link to="/Contactus">Contactus</Link> </li>
          <li>     <Link to="/Listemployee">Listemployee</Link> </li>
        </ul>
      </nav>
  
      <Outlet></Outlet>
    </div>
  );
}

export default App;
