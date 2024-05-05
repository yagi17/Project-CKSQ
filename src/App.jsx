import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#141414]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
