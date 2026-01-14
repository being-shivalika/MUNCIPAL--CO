import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Persistence for Complaints
  const [allRequests, setAllRequests] = useState(() => {
    const saved = localStorage.getItem("mc_requests");
    return saved ? JSON.parse(saved) : [];
  });

  // Persistence for Admin Services (Posts)
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem("mc_services");
    return savedServices
      ? JSON.parse(savedServices)
      : [
          {
            id: 1,
            title: "Property Tax",
            description: "Pay your annual property tax online.",
            buttonText: "Manage",
          },
          {
            id: 2,
            title: "Building Plans",
            description: "Submit and track building plans.",
            buttonText: "Review",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("mc_requests", JSON.stringify(allRequests));
    localStorage.setItem("mc_services", JSON.stringify(services));
  }, [allRequests, services]);

  const handleNewRequest = (newRequest) => {
    setAllRequests([
      { ...newRequest, id: Date.now(), status: "Pending" },
      ...allRequests,
    ]);
  };

  const addService = (newService) => {
    setServices([{ ...newService, id: Date.now() }, ...services]);
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <Outlet
        context={{
          isSidebarOpen,
          setSidebarOpen,
          allRequests,
          handleNewRequest,
          services,
          addService,
          deleteService,
        }}
      />
    </div>
  );
};

export default App;
