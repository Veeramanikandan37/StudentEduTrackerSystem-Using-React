import Content from "./content";
import NavBar from "./navbar";
import { useState } from "react";


function App() {
  const [stdcount,setStdCount]=useState(12);
  const [remcount,setRemCount]=useState(10);
  return (
    <div className="Container" >
      <div>
      <NavBar />
      </div>
      <div className="content">
      <header className="head" >Student Management</header>
      <Content  stdcount={stdcount} setStdCount={setStdCount}
       remcount={remcount} setRemCount={setRemCount} />
      </div>
    </div>
  );
}

export default App;
