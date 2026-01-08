import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [allRequests, setAllRequests] = useState([
    {
      id: 1,
      subject: "Street Light",
      message: "Light not working in Sector 5",
    },
    {
      id: 2,
      subject: "Porthole",
      message: "Big porthole causing traffic in Sector 14",
    },
    {
      id: 3,
      subject: "water leakage",
      message: "Water leakage and pipline broke in Sector 10",
    },
  ]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleNewRequest = (newReq) => {
    setAllRequests((prev) => [newReq, ...prev]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet
          context={{
            isSidebarOpen,
            setSidebarOpen,
            allRequests,
            handleNewRequest,
          }}
        />
      </div>
    </div>
  );
}

export default App;
