import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
